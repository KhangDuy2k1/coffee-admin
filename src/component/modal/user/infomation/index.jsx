import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setShowInfo, setNotShowInfo } from '../../../../redux/slice/user/infomation';
import styles from "./infouser.module.scss";
import classNames from 'classnames/bind';
const usertest = {
  email : "nguyenkhangbn8501@gmail.com"
}
const cx = classNames.bind(styles)
const InfoUserModal = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.showInfo.user)
  const isShowInfo = useSelector(state => state.showInfo.isShowInfo)
  const handleOk = () => {
      dispatch(setNotShowInfo())
  }
  const hanldeCancle = () => {
      dispatch(setNotShowInfo())
  }
  return (
    <>
      <Modal title="Thông tin Người dùng" open = {isShowInfo} onOk={handleOk} onCancel={hanldeCancle}>
        <div className={cx('container-info')}>
                <p> <span>email: </span> {user.email}</p>
                <p> <span>username: </span>{user.username}</p>
                <p> <span>phonenumber: </span> {user.phone}</p>
                <p><span>fullname: </span>{user.fullname}</p>
                <p><span>gender: </span>{user.gender}</p>
                <p><span>address: </span>{user.address}</p>
        </div>
      </Modal>
    </>
  );
};
export default InfoUserModal;