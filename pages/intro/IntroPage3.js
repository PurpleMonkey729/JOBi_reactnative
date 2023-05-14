import Main from './Main';
import bg from '../../assets/bg-intro3.png'
import btn_next from '../../assets/btn-goal.png'

export default function IntroPage3() {
  return (
    <Main 
        page_num = "3"
        ttl = "スキマ時間を充実"
        bg = {bg}
        txt1 = "ちょっとしたスキマ時間を"
        txt2 = "一緒に充実させませんか？"
        btn_next = {btn_next}
    />
  );
}