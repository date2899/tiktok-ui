import React from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

const Header = ({ title, onBack }) => {
    return (
        <header className={cx('header')}>
            <button onClick={onBack} className={cx('back-btn')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
};

export default Header;
