import '@/styles/globals.css'
import { useEffect } from 'react';
import MainLayout from '../components/MainLayout';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    let i = 0
    function reveal() {
      console.log('run')
      var reveals = document.querySelectorAll(".reveal");
      i++
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = -50;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    reveal()
    if(i == 0){
    }
    window.addEventListener("scroll", reveal);

    return () => window.removeEventListener("scroll", reveal);
  }, [])

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
