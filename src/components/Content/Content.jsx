import { Pagination, Stack } from '@mui/material';
import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import './Content.css';


export const Content = (props) => {

    // Сортировка по айдишнику альбома

    let selectName = 'Select album';
    let photosArray = props.photos;
    let selection = [];

    let [selVal, setSelVal] = useState(selectName);


    for (let i = 1; i <= 100; i++) {
        selection.push(i)
    };

    let changeSelect = (e) => {
        return (
            setSelVal(e.target.value)
        )
    };

    if (selVal !== selectName) {
        photosArray = photosArray.filter(p => p.albumId == selVal)
    };

    // Постраничный вывод информации

    const pageSize = 20;
    const [page, setPage] = useState(1);
    const pageNumder = Math.ceil(photosArray.length / pageSize);



    const selectPage = (event, value) => {
        setPage(value)
    };
    
    // Удаление страницы

    const deleteImg = (e) =>{
        photosArray = photosArray.filter( p=> p.id !== e)
        props.changePhotosThunk(photosArray)
    }
    
    // Управление модалкой

    const [openModal, setOpenModal] = useState(false);
    const [modalUrl, setModalUrl] = useState(null)

    const clickImg =(e)=>{
        setOpenModal(true);
        setModalUrl(e)
    }



    return (
        <div className='content'>
            <div className='content-select'>
                <select name="albumId" onChange={changeSelect} className='content-select-albumId'>
                    <option>{selectName}</option>
                    {selection.map(s =>
                        <option key={s} value={s}>
                            {s}
                        </option>)}
                </select>
            </div>
            <div className='content-pages'>
                <Stack spacing={2}>
                    <Pagination count={pageNumder} size='large' onChange={selectPage} />
                </Stack>
            </div>
            <div className='content-photos'>
                {photosArray
                    .slice((page - 1) * pageSize, page * pageSize)
                    .map(p =>
                        <div className='content-photo'>
                            <img src={p.thumbnailUrl} onClick={()=>clickImg(p.url)}/>                           
                            <button className='content-button' onClick={()=>deleteImg(p.id)}>DELETE</button>
                        </div>
                    )}
            </div>
            {openModal && <Modal img={modalUrl}
                                 setOpenModal={setOpenModal}/>}
        </div>
    )
}