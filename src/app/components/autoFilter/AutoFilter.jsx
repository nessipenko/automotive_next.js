import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Checkbox,
    ListItemText,
    OutlinedInput,
    Typography,
    Button,
    Box,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useData from '../../api/page';

const AutoFilter = ({ onFilterChange }) => {
    const data = useData();

    const [filters, setFilters] = useState({
        make: 'all',
        model: '',
        type: [],
        sales: []
    });

    const [options, setOptions] = useState({
        make: [],
        model: [],
        type: [],
        sales: []
    });

    useEffect(() => {
        const makeOptions = Array.from(new Set(data.map(item => item.make)));
        const modelOptions = Array.from(new Set(data.map(item => item.model)));
        const typeOptions = Array.from(new Set(data.map(item => item.type)));
        const salesOptions = Array.from(new Set(data.flatMap(item => item.sales.map(sale => sale.reseller))));

        setOptions({
            make: makeOptions,
            model: modelOptions,
            type: typeOptions,
            sales: salesOptions
        });
    }, [data]);

    useEffect(() => {
        let filteredautos = data.filter(auto => {
            if (filters.make !== 'all' && auto.make !== filters.make) return false;
            if (filters.model !== '' && auto.model.toLowerCase().indexOf(filters.model.toLowerCase()) === -1) return false;
            if (filters.type.length > 0 && !filters.type.includes(auto.type)) return false;
            if (filters.sales.length > 0 && !filters.sales.some(sale => auto.sales.map(s => s.reseller).includes(sale))) return false;
            return true;
        });
        onFilterChange(filteredautos, filteredautos.length === 0);
    }, [data, filters]);


    const handleChoose = (type, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [type]: value
        }));
    };

    const handleClear = (type) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [type]: type === 'model' || type === 'sales' ? '' : []
        }));
    };

    const ClearIndicatorType = () => {
        return (
            <IconButton size="small" onMouseDown={(e) => e.stopPropagation()} onClick={() => handleClear('type')}>
                <CloseIcon sx={{ margin: '0 14px' }} />
            </IconButton>
        );
    };

    const ClearIndicatorSales = () => {
        return (
            <IconButton size="small" onMouseDown={(e) => e.stopPropagation()} onClick={() => handleClear('sales')}>
                <CloseIcon sx={{ margin: '0 14px' }} />
            </IconButton>
        );
    };

    const renderMenuItems = (optionsArray, filterType) => {
        return optionsArray.map(option => {
            return (
                <MenuItem key={option} value={option}>
                    {filterType === 'type' && (
                        <>
                            <Checkbox checked={filters[filterType].indexOf(option) > -1} />
                            <ListItemText primary={option} />
                        </>
                    )}
                    {filterType !== 'type' && option}
                </MenuItem>
            );
        });
    }

    return (
        <>
            <Typography variant="h6" className="mb-1" style={{ textShadow: '1px 1px 3px #3f51b5', color: '#eff0f1', fontWeight: 'bold' }}>Auto Filter</Typography>

            <FormControl className='w-80 bg-white shadow rounded' sx={{ m: 1, minWidth: 280 }}>
                <InputLabel id="auto-make-label">Make</InputLabel>
                <Select
                    labelId='auto-make-label'
                    id='auto-make'
                    value={filters.make}
                    onChange={(e) => handleChoose('make', e.target.value)}
                    input={<OutlinedInput label="Make" />}
                >
                    <MenuItem key="all" value="all">All Makes</MenuItem>
                    {options.make.map(make => (
                        <MenuItem key={make} value={make}>{make}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField
                className='w-80 bg-white shadow rounded'
                sx={{ m: 1, minWidth: 280 }}
                id='auto-model'
                label='Model'
                value={filters.model}
                onChange={(e) => {
                    const inputValue = e.target.value;
                    if (!/[а-яА-ЯЁё]/.test(inputValue)) {
                        handleChoose('model', inputValue);
                    }
                }} InputProps={{
                    endAdornment: filters.model.length > 0 && (
                        <IconButton size="small" onMouseDown={(e) => e.stopPropagation()} onClick={() => handleClear('model')}>
                            <CloseIcon />
                        </IconButton>
                    )
                }}
            />

            <FormControl className='w-80 bg-white shadow rounded' sx={{ m: 1, minWidth: 280 }}>
                <InputLabel id="auto-type-label">Type</InputLabel>
                <Select
                    labelId='auto-type-label'
                    id='auto-type'
                    multiple
                    value={filters.type}
                    onChange={(e) => handleChoose('type', e.target.value)}
                    input={<OutlinedInput label="Type" />}

                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={{
                        PaperProps: {
                            style: {
                                maxHeight: 300,
                                width: 250
                            },
                        },
                    }}
                    IconComponent={filters.type.length > 0 ? ClearIndicatorType : undefined}>

                    {renderMenuItems(options.type, 'type')}
                </Select>
            </FormControl >

            <FormControl className='w-80 bg-white shadow rounded' sx={{ m: 1, minWidth: 280 }}>
                <InputLabel id='auto-reseller-label'>Auto Reseller</InputLabel>
                <Select
                    labelId='auto-reseller-label'
                    id='auto-reseller'
                    multiple
                    value={Array.isArray(filters.sales) ? filters.sales : []}
                    onChange={(e) => handleChoose('sales', e.target.value)}
                    input={<OutlinedInput label="Reseller" />}
                    IconComponent={filters.sales.length > 0 ? ClearIndicatorSales : undefined}
                >
                    {renderMenuItems(options.sales)}
                </Select>

            </FormControl>

            <Link href="/auto/saleschart">
                <Box className='w-80 bg-white shadow rounded' sx={{ m: 1, minWidth: 280 }}>
                    <Button
                        size="large"
                        variant="outlined"
                        color="primary"
                        fullWidth
                    >
                        View sales chart
                    </Button>
                </Box>
            </Link >
        </>
    );
};

export default AutoFilter;
