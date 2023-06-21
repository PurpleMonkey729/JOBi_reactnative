import Main from './Main';
import bg from '../../assets/bg-intro2.png'
import btn_next from '../../assets/btn-next.png'

export default function IntroPage2() {
  return (
    <Main 
        page_num = {2}
        bg = {bg}
        ttl = "お給料がすぐもらえる"
        txt1 = "お仕事が終わったら365日24時間いつでも"
        txt2 = "お給料が引き出せます。"
        btn_next = {btn_next}
    />
  );
}