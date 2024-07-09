import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faBox, faHeart, faInbox, faClipboardList, faBoxes, faDollarSign, faCalendarAlt, faListUl, faAddressBook, faFileInvoice, faPalette, faUsers, faTable, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div style={{ width: '250px', backgroundColor: '#f4f4f4', padding: '20px' }}>
            <h2 style={{ marginBottom: '20px' }}>
                <span style={{ color: '#007bff' }}>Dash</span>
                <span style={{ color: '#000' }}>Stack</span>
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '20px' }}>
                    <FontAwesomeIcon icon={faChartBar} style={{ marginRight: '10px' }} />
                    Dashboard
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <FontAwesomeIcon icon={faBox} style={{ marginRight: '10px' }} />
                    Products
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <FontAwesomeIcon icon={faHeart} style={{ marginRight: '10px' }} />
                    Favorites
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <FontAwesomeIcon icon={faInbox} style={{ marginRight: '10px' }} />
                    Inbox
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <FontAwesomeIcon icon={faClipboardList} style={{ marginRight: '10px' }} />
                    Order Lists
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <FontAwesomeIcon icon={faBoxes} style={{ marginRight: '10px' }} />
                    Product Stock
                </li>
                <hr style={{ border: 'none', borderBottom: '1px solid violet', margin: '20px 0' }} />
                <h3 style={{ color: 'violet', marginBottom: '20px' }}>Pages</h3>
                <li style={{ marginBottom: '20px' }}>
                    <FontAwesomeIcon icon={faDollarSign} style={{ marginRight: '10px' }} />
                    Pricing
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '10px' }} />
                    Calendar
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <FontAwesomeIcon icon={faListUl} style={{ marginRight: '10px' }} />
                    To-Do
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <FontAwesomeIcon icon={faAddressBook} style={{ marginRight: '10px' }} />
                    Contact
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <FontAwesomeIcon icon={faFileInvoice} style={{ marginRight: '10px' }} />
                    Invoice
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <FontAwesomeIcon icon={faPalette} style={{ marginRight: '10px' }} />
                    UI Elements
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: '10px' }} />
                    Team
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <FontAwesomeIcon icon={faTable} style={{ marginRight: '10px' }} />
                    Table
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <FontAwesomeIcon icon={faCog} style={{ marginRight: '10px' }} />
                    Settings
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: '10px' }} />
                    Logout
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
