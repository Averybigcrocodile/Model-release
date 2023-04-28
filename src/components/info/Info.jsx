import cn from "classnames";
import styles from "./Info.module.css";
import styles2 from "../../index.module.css";
import { Link } from "react-router-dom";

const Info = () => {
  function handleHide() {
    const hiddenElems = document.querySelectorAll(`.${styles.hide_on_click}`);
    hiddenElems.forEach((el) => {
      el.style.display = "none";
    });
  }
  return (
    <div>
      <div className={cn(styles2.label)}>
        <h2>Agreement</h2>
      </div>
      <div className={cn(styles.info)}>
        <p>
          In exchange for a valuable and compensatory consideration, which by
          signing this document is recognized as sufficient and received, I, the
          Model, give to the Photographer, his/her legal representatives and
          successors, those on whose behalf the Photographer acts, as well as
          those acting on his/her behalf and with his/her permission, the
          exclusive and unrestricted right and permission to copyright, in
          his/her name, and to use, reuse, publish and republish the portraits
          and other pictures of me or those pictures in which depicted/portrayed
          by the Photographer (Photographs), in whole or in part, as part of a
          composite image or in altered form and content, without limitation in
          the changes permitted to the Photograph.
        </p>
        <p>
          Photographs are allowed to be captioned with both my name and a
          fictitious name, reproductions may be printed in color or monochrome,
          using the Photographer's equipment or any other equipment, and
          distributed in any way, for the purpose of illustration, product
          promotion, as art, in publications, advertising, commerce, publishing
          and for any other purposes. I also grant the right to use the printed
          materials in connection with the above purposes. By signing this
          document, I waive all rights to review and approve the finished
          product or products, as well as advertising copy and other related
          materials, or the very purpose for which the photos are used.
        </p>
        <p>
          By signing this document, I grant the Photographer, the persons
          employed by the Photographer, his legal representatives and
          successors, as well as other persons who are subordinate to the
          Photographer, or those whose tasks he performs, the stipulated rights
          and release him from the fulfillment of obligations and any any
          responsibility for any changes in the Photos and any purposes of their
          use. I confirm my agreement to the fact that I will not have any
          rights to these Photographs, all rights to these Photographs,
          including copyright, belong to the Photographer and his Successors. I
          hereby agree that I will have no right to any additional compensation
          or compensation, and I agree not to pursue any further claims against
          the Photographer and his/her Successors for any reason whatsoever,
          including for defamation and invasion of privacy. life. I confirm my
          agreement that what is listed and signed in this document is binding
          on me, my heirs, legal representatives and successors. I confirm that
          this transfer of rights is final, worldwide and of unlimited duration.
          By signing this document, I confirm that I have reached the age of
          majority and have the right to act on my behalf. Before signing this
          document, I have fully and carefully read the contents of this
          agreement.
        </p>
      </div>
      <div className={cn(styles2.label)}>
        <h2>Угода</h2>
      </div>
      <div className={cn(styles.info)}>
        <p>
          В обмін за цінну та відплатну винагороду, яка підписанням цього
          документа визнається достатньою та отриманою, я Модель, даю Фотографу,
          його/її юридичним представникам та правонаступникам, тим, за завданням
          яких діє Фотограф, а також тим, хто діє від його/її імені та з його/її
          дозволом, невід'ємне та необмежене право та дозвіл на авторські права,
          на його/її ім'я, а також на використання, повторне використання,
          публікацію та повторну публікацію фотопортретів та інших моїх знімків
          або тих знімків, на яких зображено/зображено я, зроблених Фотографом
          (Фотографії), повністю або частково, в якості частини складеного
          зображення або у зміненій формі та змісті, без обмежень у змінах, що
          допускаються на Фотографії.
        </p>
        <p>
          Підписувати Фотографії дозволяється як моїм, так і вигаданим ім'ям,
          репродукції можуть друкуватись як у кольорі, так і в монохромі, при
          використанні обладнання Фотографа або будь-якого іншого обладнання, та
          поширюватися будь-яким способом, з метою ілюстрації, просування
          товарів, як мистецтво, в публікаціях, рекламі, торгівлі, видавництві
          та для будь-яких інших цілей. Я також даю право на використання
          друкованих матеріалів у зв'язку із зазначеними вище цілями.
          Підписанням цього документа я відмовляюся від усіх прав на перегляд та
          схвалення готового продукту чи продукції, а також рекламних копій та
          інших пов'язаних матеріалів, або самої мети, для якої використовуються
          фотографії.
        </p>
        <p>
          Підписанням цього документа я даю Фотографу, найнятим Фотографом
          особам, його юридичним представникам та правонаступникам, а також
          іншим особам, які перебувають у підпорядкуванні у Фотографа, або тим,
          чиї завдання він виконує, обумовлені права та звільняю його від
          виконання зобов'язань та будь-якої відповідальності щодо будь-яких
          змін у Фотографіях та будь-яких цілей їх використання. Я підтверджую
          свою згоду з тим фактом, що не матиму на дані Фотографії жодних прав,
          всі права на дані Фотографії, включаючи авторські, належать Фотографу
          та його Правонаступникам. Я підтверджую свою згоду з тим фактом, що не
          матиму жодних прав на додаткове відшкодування або винагороду, і
          зобов'язуюсь надалі не пред'являти жодних вимог Фотографу та його/її
          Правонаступникам з будь-яких причин, включаючи звинувачення в наклепі
          та вторгненні в особисте життя. Я підтверджую свою згоду з тим, що
          перелічене та підписане в цьому документі має обов'язковий характер
          для мене, моїх спадкоємців, юридичних представників та
          правонаступників. Я підтверджую, що дана передача прав є остаточною,
          має всесвітню силу та необмежений термін дії. Підписанням цього
          документа я підтверджую досягнення мною повноліття та наявність права
          виступати від особи. Перед підписанням цього документа я повністю та
          ретельно ознайомився/ознайомилася із змістом цієї угоди.
        </p>
        <Link to="/sign" className={cn(styles2.btn)} onClick={handleHide}>
          Confirm/Підтверджую
        </Link>
      </div>
    </div>
  );
};

export default Info;
