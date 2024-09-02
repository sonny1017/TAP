import styles from './Header.module.css';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navi =useNavigate();
    const handleLogin=()=>{
        navi('/login')
    }
    const handleMypage=()=>{
        navi('/mypage')
    }
    const handleHome=()=>{
        navi('/')
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title} onClick={handleHome}>
                    TAP
                </div>
                <div className={styles.headerMenus}>
                    <div className={styles.headerMenu} onClick={handleLogin}>
                        로그인
                    </div>
                    <div className={styles.headerMenu}>
                        회원가입
                    </div>
                    <div className={styles.headerMenu} onClick={handleMypage}>
                        마이페이지
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;