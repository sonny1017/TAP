import React, { useEffect, useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import styles from './Caroucel.module.css';

export const Caroucel = ({category, images})=>{

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [settings, setSettings] = useState({
      chevronWidth: 40, // 버튼과 컨텐츠 간 간격
      numberOfCards: 5, // 한 번에 보여줄 카드 수
      height: 350 // 카드 높이
    });
    const [autoPlay, setAutoPlay] = useState(false); // 카드 1개씩 자동 넘김 (현재 3초당 1개씩 전환)
    // 만약 여러개의 카드를 넘기고 싶거나, 속도 조정필요시 setting2 if문으로 추가

    //setting1 useeffect ( 화면 출력 카드수, 카드 간격, 카드 높이)
    useEffect(() => {
      console.log(category);
        if (category === "art1") {
          setSettings({
            chevronWidth: 40,
            numberOfCards: 4,
            height: 350
        });
        setAutoPlay(true);
        }else if(category === "art2" && category === "art3"){
          setSettings({
            chevronWidth: 40,
            numberOfCards: 5,
            height: 500
        });
        setAutoPlay(false);
        } else if (category === "sport") {
          setSettings({
            chevronWidth: 40,
            numberOfCards: 5,
            height: 350
        });
        setAutoPlay(true);
        }
        setActiveItemIndex(0);
      }, []); // category가 바뀔 때만 상태 업데이트

    //setting2 useeffect ( 카드 전환 설정)  
    useEffect(() => {
      if (autoPlay) {
        console.log("category", category);
        const interval = setInterval(() => {
        //   setActiveItemIndex((prevIndex) => (prevIndex + 1) % images.length);
          setActiveItemIndex((prevIndex) => (prevIndex + 1) % 7);
        }, 3000); // 1초마다 슬라이드 전환  
        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 제거
      }
    }, [autoPlay/*, images.length*/]);

    if(category === "art1"){

        return (
            <div style={{ padding: `0 ${settings.chevronWidth}px` }}>
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={settings.numberOfCards} // 출력할 카드 수
                gutter={5} // 카드 간 간격
                leftChevron={<button>{'<'}</button>} // 왼쪽 버튼 
                rightChevron={<button>{'>'}</button>} //오른쪽 버튼
                outsideChevron={true}
                chevronWidth={settings.chevronWidth}
                infiniteLoop={true} // 무제한 반복
              //   disableSwipe={true} // 스와이프 가능 유무
              >
      
              <a href='#'>
              <div style={{ height: settings.height, background: "url('/logo192.png') no-repeat center/cover" }} className={styles.card}>
                  <h2>상품명</h2>
                  <p>세종대학교 대양홀</p>
                  <p>2024.09.04 - 2024.09.27</p>
              </div>
              </a>
              <a href='#'>
              <div style={{ height: settings.height, background: "url('/logo192.png') no-repeat center/cover" }} className={styles.card}>
                  <h2>상품명</h2>
                  <p>세종대학교 대양홀</p>
                  <p>2024.09.04 - 2024.09.27</p>
              </div>
              </a>
              <a href='#'>
              <div style={{ height: settings.height, background: "url('/logo192.png') no-repeat center/cover" }} className={styles.card}>
                  <h2>상품명</h2>
                  <p>세종대학교 대양홀</p>
                  <p>2024.09.04 - 2024.09.27</p>
              </div>
              </a>
              <a href='#'>
              <div style={{ height: settings.height, background: "url('/logo192.png') no-repeat center/cover" }} className={styles.card}>
                  <h2>상품명</h2>
                  <p>세종대학교 대양홀</p>
                  <p>2024.09.04 - 2024.09.27</p>
              </div>
              </a>
              <a href='#'>
              <div style={{ height: settings.height, background: "url('/logo192.png') no-repeat center/cover" }} className={styles.card}>
                  <h2>상품명</h2>
                  <p>세종대학교 대양홀</p>
                  <p>2024.09.04 - 2024.09.27</p>
              </div>
              </a>
              
              </ItemsCarousel>
            </div>
          );

    }else if(category === "sport"){
      return (
        <div style={{ padding: `0 ${settings.chevronWidth}px` }}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={settings.numberOfCards} // 출력할 카드 수
            gutter={5} // 카드 간 간격
            leftChevron={<button>{'<'}</button>} // 왼쪽 버튼 
            rightChevron={<button>{'>'}</button>} //오른쪽 버튼
            outsideChevron
            chevronWidth={settings.chevronWidth}
            infiniteLoop={true} // 무제한 반복
          //   disableSwipe={true} // 스와이프 가능 유무
          >
  
          <a href='#'>
          <div style={{ height: settings.height, background: "url('/logo192.png') no-repeat center/cover" }} className={styles.card}>
              <h2>상품명</h2>
              <p>세종대학교 대양홀</p>
              <p>2024.09.04 - 2024.09.27</p>
          </div>
          </a>

          </ItemsCarousel>
        </div>
      );
    }else if(category === "art2"){
      return (
          <div style={{ padding: `0 ${settings.chevronWidth}px` }}>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={settings.numberOfCards} // 출력할 카드 수
              gutter={5} // 카드 간 간격
              leftChevron={<button>{'<'}</button>} // 왼쪽 버튼 
              rightChevron={<button>{'>'}</button>} //오른쪽 버튼
              outsideChevron
              chevronWidth={settings.chevronWidth}
              infiniteLoop={false} // 무제한 반복
            >
    
            <a href='#'>
            <div style={{ height: settings.height, /*background: "url('/logo192.png') no-repeat center/cover" */}} className={styles.card}>
                <div className={styles.poster}>
                  <img src='/logo192.png'></img>
                </div>
                <p style={{fontSize:"18px", fontWeight:"600"}}>뮤지컬 &lt;킹키부츠&gt; </p>
                <p style={{marginBottom:"0"}}>캐러셀2-1</p>
                <p style={{marginTop:"0"}}>2024.09.04 - 2024.09.27</p>
                <p><span style={{color:"red", fontWeight:"600"}}>25% </span><span style={{fontWeight:"600"}}>52,500원</span></p>
            </div>
            </a>
            </ItemsCarousel>
          </div>
        );

    }else if(category === "art3"){
      return (
          <div style={{ padding: `0 ${settings.chevronWidth}px` }}>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={settings.numberOfCards} // 출력할 카드 수
              gutter={5} // 카드 간 간격
              leftChevron={<button>{'<'}</button>} // 왼쪽 버튼 
              rightChevron={<button>{'>'}</button>} //오른쪽 버튼
              outsideChevron
              chevronWidth={settings.chevronWidth}
              infiniteLoop={false} // 무제한 반복
            >
    
            <a href='#'>
            <div style={{ height: settings.height, /*background: "url('/logo192.png') no-repeat center/cover" */}} className={styles.card}>
                <div className={styles.poster}>
                  <img src='/logo192.png'></img>
                </div>
                <p style={{color:"purple", fontWeight:"600", marginBottom:"0px",fontSize:"18px"}}>09.03(월) 14:00 </p>
                <p style={{fontSize:"18px", fontWeight:"600"}}>뮤지컬 &lt;킹키부츠&gt; </p>
                <p>캐러셀2-1</p>
            </div>
            </a>
            <a href='#'>
            <div style={{ height: settings.height, /*background: "url('/logo192.png') no-repeat center/cover" */}} className={styles.card}>
                <div className={styles.poster}>
                  <img src='/logo192.png'></img>
                </div>
                <p style={{color:"purple", fontWeight:"600", marginBottom:"0px",fontSize:"18px"}}>09.03(월) 14:00 </p>
                <p style={{fontSize:"18px", fontWeight:"600"}}>뮤지컬 &lt;킹키부츠&gt; </p>
                <p>캐러셀2-1</p>
            </div>
            </a>
            <a href='#'>
            <div style={{ height: settings.height, /*background: "url('/logo192.png') no-repeat center/cover" */}} className={styles.card}>
                <div className={styles.poster}>
                  <img src='/logo192.png'></img>
                </div>
                <p style={{color:"purple", fontWeight:"600", marginBottom:"0px",fontSize:"18px"}}>09.03(월) 14:00 </p>
                <p style={{fontSize:"18px", fontWeight:"600"}}>뮤지컬 &lt;킹키부츠&gt; </p>
                <p>캐러셀2-1</p>
            </div>
            </a>
            <a href='#'>
            <div style={{ height: settings.height, /*background: "url('/logo192.png') no-repeat center/cover" */}} className={styles.card}>
                <div className={styles.poster}>
                  <img src='/logo192.png'></img>
                </div>
                <p style={{color:"purple", fontWeight:"600", marginBottom:"0px",fontSize:"18px"}}>09.03(월) 14:00 </p>
                <p style={{fontSize:"18px", fontWeight:"600"}}>뮤지컬 &lt;킹키부츠&gt; </p>
                <p>캐러셀2-1</p>
            </div>
            </a>
            <a href='#'>
            <div style={{ height: settings.height, /*background: "url('/logo192.png') no-repeat center/cover" */}} className={styles.card}>
                <div className={styles.poster}>
                  <img src='/logo192.png'></img>
                </div>
                <p style={{color:"purple", fontWeight:"600", marginBottom:"0px",fontSize:"18px"}}>09.03(월) 14:00 </p>
                <p style={{fontSize:"18px", fontWeight:"600"}}>뮤지컬 &lt;킹키부츠&gt; </p>
                <p>캐러셀2-1</p>
            </div>
            </a>
            <a href='#'>
            <div style={{ height: settings.height, /*background: "url('/logo192.png') no-repeat center/cover" */}} className={styles.card}>
                <div className={styles.poster}>
                  <img src='/logo192.png'></img>
                </div>
                <p style={{color:"purple", fontWeight:"600", marginBottom:"0px",fontSize:"18px"}}>09.03(월) 14:00 </p>
                <p style={{fontSize:"18px", fontWeight:"600"}}>뮤지컬 &lt;킹키부츠&gt; </p>
                <p>캐러셀2-1</p>
            </div>
            </a>
            </ItemsCarousel>
          </div>
        );

    }else{
        return (<p>홈으로 이동</p>);
    }

    
    
}