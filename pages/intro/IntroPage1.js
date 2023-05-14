import Main from './Main';
import bg from '../../assets/bg-intro1.png'
import btn_next from '../../assets/btn-next.png'

export default function IntroPage1(props) {
  return (
    <Main 
        page_num = "1"
        bg = {bg}
        ttl = "好きな時間に働こう"
        txt1 = "好きな職種を履歴書・面接一切なし！"
        txt2 = "あなたの働きたい時間ですぐ見つかります。"
        btn_next = {btn_next}
    />
  );
}
