import React from 'react';
import './Exploermenu.css'
import { menu_list } from '../../assets/assets';

const Exploermenu = ({ category, setcategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className="explore-menu-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, distinctio facere quam quaerat eveniet fugit impedit rem veniam iste repudiandae? Placeat totam tenetur maxime obcaecati doloremque voluptas! Aliquam fuga libero blanditiis dolores cupiditate at ratione porro totam dolorum nobis, iusto architecto enim voluptatem. Omnis, asperiores?</p>
            <div className="explore-menu-item">
                {
                    menu_list.map((item, index) => {
                        return (
                            <div onClick={() => setcategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className="explore-menu-list-item">
                                <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                                <p>{item.menu_name}</p>

                            </div>
                        )
                    })
                }
            </div>
            <hr />

        </div>
    );
}

export default Exploermenu;
