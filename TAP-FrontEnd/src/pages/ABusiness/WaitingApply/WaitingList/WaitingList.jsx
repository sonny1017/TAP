import { useEffect, useState } from 'react';
import styles from './WaitingList.module.css'
import { api } from '../../../../config/config';
import {Pagination} from '../../../../components/Pagination/Pagination';
import { ModalReject } from './ModalReject/ModalReject';
import { FaLightbulb } from 'react-icons/fa';

export const WaitingList=()=>{
    
    const [events, setEvents] = useState([]);
    const [filtered, setFiltered] = useState(events);
  
    useEffect(()=>{
        // 신청 완료 목록 - { 판매중, 판매예정, 판매종료 }
        api.get(`/biz/registration`).then((resp)=>{
            setEvents(resp.data); // 상품들 세팅하기
            setFiltered(resp.data); // 검색될때 사용할 filtered 상태
            console.log(resp.data);
        });

        // 신청대기중, 

    },[])

    // 날짜 변환 함수
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        // 원하는 포맷으로 변환 (년-월-일)
        return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'short',
        });
    };

    // 페이지네이션 설정
    const [currentPage, setCurrentPage] = useState(0);
    const PER_PAGE = 3;
    const pageCount = Math.ceil(filtered.length / PER_PAGE);
    const handlePageChange = ({selected}) => {
        setCurrentPage(selected);
        window.scrollTo(0,0); // 페이지 변경 시 스크롤 맨 위로 이동
    };
    

    return(
        <div className={styles.container}>
            <div className={styles.product_table}>
            <table>
                <thead>
                <tr>
                    <th>접수번호</th>
                    <th>상품정보</th>
                    <th>일시</th>
                    <th>공연장</th>
                    <th>신청일</th>
                    <th>상태</th>
                    <th>신청 취소</th>
                </tr>
                </thead>
                <tbody>
                {filtered.slice(currentPage * PER_PAGE, (currentPage +1) * PER_PAGE).map((product, index) => (
                    <tr key={index}>
                        <td className={styles.product_id}>
                            {product.APPLICATION_SEQ}
                        </td>
                    <td className={styles.product_info}>
                        <div className={styles.product_image_container}>
                        <img src={product.FILES_SYSNAME} alt={product.FILES_ORINAME} className={styles.product_image} />
                        </div>
                        <div className={styles.product_details }>
                            <div className={styles.product_name}>{product.NAME}</div>
                            <div className={styles.product_sub_info}>
                                {product.SUB_CATEGORY_NAME} | {product.AGE_LIMIT} | {product.RUNNING_TIME} 분
                            </div>
                        </div>
                    </td>
                    <td className={styles.product_date}>{formatDate(product.start_date)}~ <br/>{formatDate(product.end_date)}</td>
                    <td className={styles.product_venue}>{product.PLACE_NAME} </td>
                    <td className={styles.product_venue}>{formatDate(product.created_at)} </td>
                    <td className={styles.product_venue}>
                    {product.STATUS !=='반려' && (
                         <div className={styles.rejectReason}>
                         <span>{product.STATUS} </span>
                         </div>
                    )}
                     {product.STATUS === '반려' && (
                    <div className={styles.rejectReason}>
                      <span>반려</span>
                      <span className={styles.tooltipIcon}><FaLightbulb size={20} /> </span>
                      <div className={styles.tooltipText}>{product.REJECTION_REASON} 반려 이유: </div>
                    </div>
                  )}
                    </td>
                    <td>
                        <button className={styles.manage_button}>신청 취소</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            <div className={styles.pagination}>
            {/* 페이지네이션 */}
            {pageCount > 0 && (
                <Pagination
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                />
                )}
            </div>

        </div>
    )
}