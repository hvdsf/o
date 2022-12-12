import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Encontre o seu plano ideal em poucos <br className="sm:block hidden" /> cliques
        
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Adequamos o nosso time para lhe atender da melhor maneira afim de achar
        aquela proposta ideal para seus interesses financeiros. Com simples passos e
        poucos cliques chegamos à sua solução!  
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
