import Image, { StaticImageData } from 'next/image';
import { BsArrowRight } from "react-icons/bs";

import classes from './styles.module.css';

interface CardItemProps {
    title: string;
    summary?: string;
    image?: StaticImageData;
}

export default function CardItem(props: CardItemProps) {
    console.log(props.summary && props.summary.split("<br />"))
    return (
        <div className={classes.cardItem}>
            {props.image && <Image src={props.image} alt={props.title} className={classes.image} />}            
            <h2 className={classes.title}>{props.title}</h2>
            {/* {props.summary.split('<br />').map((s) => <p>{s}</p>)} */}
            {props.summary && <div className={classes.summary} dangerouslySetInnerHTML={{ __html: props.summary}} />}
            <div className={classes.arrow}>
                <BsArrowRight />
            </div>
        </div>
    );
}