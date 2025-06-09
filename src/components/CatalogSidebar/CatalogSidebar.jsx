import css from "./CatalogSidebar.module.css"
import Transmission from '../../assets/diagram.svg?react';
import Ac from '../../assets/wind.svg?react';
import Bathroom from '../../assets/ph_shower.svg?react';
import Kitchen from '../../assets/cup-hot.svg?react';
import Tv from '../../assets/tv.svg?react';
import ForeBox from '../../assets/bi_grid.svg?react';
import TwelveBox from '../../assets/bi_grid2.svg?react';
import Van from '../../assets/bi_grid-1x2.svg?react';
import Map from '../../assets/map.svg?react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setFilters} from "../../redux/filtersSlice.js";

const equipmentFilterConfig = [
    { icon: <Ac />, label: 'AC', id: 'AC' },
    { icon: <Transmission />, label: 'Automatic', id: 'transmission' },
    { icon: <Kitchen />, label: 'Kitchen', id: 'kitchen' },
    { icon: <Tv />, label: 'TV', id: 'TV' },
    { icon: <Bathroom />, label: 'Bathroom', id: 'bathroom' },
];

const vehicleTypeFilterConfig = [
    { icon: <Van />, label: 'Van', id: 'panelTruck' },
    { icon: <ForeBox />, label: 'Fully Integrated', id: 'fullyIntegrated' },
    { icon: <TwelveBox />, label: 'Alcove', id:'alcove' },
];

function CatalogSidebar () {
    const dispatch = useDispatch();
    const [location, setLocation] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [equipment, setEquipment] = useState([]);

    const handleChange = (e) => {
        setLocation(e.target.value);
    };

    const handleToggleEquipment = (id) => {
        setEquipment((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const handleTypeClick = (selectedType) => {
        if (vehicleType === selectedType) {
            setVehicleType('');
        } else {
            setVehicleType(selectedType);
        }
    };

    const onSaveFilters = () => {
        dispatch(setFilters({
            location: location,
            type: vehicleType,
            equipment: equipment,
        }));
    };

    return (
        <>
            <aside className={css['catalog-sidebar']}>
                <div className={css['catalog-sidebar-section']}>
                    <h4>Location</h4>

                    <div className={css['field-with-icon']}>
                        <Map/>

                        <input
                            type="text"
                            placeholder="City"
                            value={location}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className={css['catalog-sidebar-section']}>
                    <h4>Filters</h4>

                    <div className={css['catalog-sidebar-filter']}>
                        <h5>Vehicle equipment</h5>
                        <hr className='divider'/>

                        <div className={css['catalog-sidebar-filter--items']}>
                            {equipmentFilterConfig.map(({ icon, label, id }) => (
                                <div
                                    key={id}
                                    className={`${css['catalog-sidebar-filter--item']} ${
                                        equipment.includes(id) ? css['active'] : ''
                                    }`}
                                    onClick={() => handleToggleEquipment(id)}
                                >
                                    {icon}
                                    <span>{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={css['catalog-sidebar-filter']}>
                        <h5>Vehicle type</h5>
                        <hr className='divider'/>

                        <div className={css['catalog-sidebar-filter--items']}>
                            {vehicleTypeFilterConfig.map(({ icon, label, id }) => (
                                <div
                                    key={label}
                                    className={`${css['catalog-sidebar-filter--item']} ${
                                        vehicleType === id ? css['active'] : ''
                                    }`}
                                    onClick={() => handleTypeClick(id)}
                                >
                                    {icon}
                                    <span>{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <button className='btn-primary' onClick={onSaveFilters}>Search</button>
            </aside>
        </>
    )
}

export default CatalogSidebar
