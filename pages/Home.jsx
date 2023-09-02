"use client"
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const Main = dynamic(()=> import('./Main/Main'));
const New = dynamic(() => import('./New/New'),{
    loading: () => <p>Loading...</p>,
    ssr: false,
});
const Sponsor = dynamic(() => import('./sponsor/Sponsor'),{
    loading: () => <p>Loading...</p>,
    ssr: false,
});
const Button = dynamic(() => import('./Button/Button'),{
    loading: () => <p>Loading...</p>,
    ssr: false,
});
const Title = dynamic(() => import('./Title/Title'),{
    loading: () => <p>Loading...</p>,
    ssr: false,
});
const Footer = dynamic(() => import('./Footer/Footer'),{
    loading: () => <p>Loading...</p>,
    ssr: false,
});

export default function Home() {
    const [hasRunToday, setHasRunToday] = useState(false);

    useEffect(() => {
        const today = new Date().toLocaleDateString();
        const lastRunDate = localStorage.getItem('lastRunDate');
        if (lastRunDate !== today) {
            setTimeout(()=>{
                alert("目前網站還在製作中，如果有任何問題，歡迎加入Discord群詢問，我們預計會在幾周後製作完畢，敬請期待!\n\nSTSP Studio團隊 敬上")
                localStorage.setItem('lastRunDate', today);
                setHasRunToday(true);
            }, 500)
            return () => {
                clearTimeout(timer);
            };
        };
    }, []);
    return (
        <div>
            <Main />
            <New />
            {/* <Sponsor /> */}
            <Button />
            <Title />
            <Footer />
        </div>
    );
}