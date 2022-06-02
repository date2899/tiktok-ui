import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f2db941322ec03b4ba5911a3f3f2df7a.jpeg?x-expires=1654311600&x-signature=xPhuV%2BlTTLQqm%2BIS4S1vVcyTX44%3D"
                alt="hoaa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />
                </p>
                <span className={cx('usernames')}>NguyenVanA</span>
            </div>
        </div>
    );
};

export default AccountItem;
