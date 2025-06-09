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

function CatalogSidebar () {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        console.log('Поле ввода:', e.target.value);
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
                            value={value}
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
                            <div className={css['catalog-sidebar-filter--item']}>
                                <Ac></Ac>
                                <span>AC</span>
                            </div>

                            <div className={css['catalog-sidebar-filter--item']}>
                                <Transmission></Transmission>
                                <span>Automatic</span>
                            </div>

                            <div className={css['catalog-sidebar-filter--item']}>
                                <Kitchen></Kitchen>
                                <span>Kitchen</span>
                            </div>

                            <div className={css['catalog-sidebar-filter--item']}>
                                <Tv></Tv>
                                <span>TV</span>
                            </div>

                            <div className={css['catalog-sidebar-filter--item']}>
                                <Bathroom></Bathroom>
                                <span>Bathroom</span>
                            </div>
                        </div>
                    </div>

                    <div className={css['catalog-sidebar-filter']}>
                        <h5>Vehicle type</h5>
                        <hr className='divider'/>

                        <div className={css['catalog-sidebar-filter--items']}>
                            <div className={css['catalog-sidebar-filter--item']}>
                                <Van></Van>
                                <span>Van</span>
                            </div>

                            <div className={css['catalog-sidebar-filter--item']}>
                                <ForeBox></ForeBox>
                                <span>Fully Integrated</span>
                            </div>

                            <div className={css['catalog-sidebar-filter--item']}>
                                <TwelveBox></TwelveBox>
                                <span>Alcove</span>
                            </div>
                        </div>
                    </div>
                </div>

                <button className='btn-primary'>Search</button>
            </aside>
        </>
    )
}

export default CatalogSidebar
