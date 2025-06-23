import splitSentenceByWords from '../helpers/HeaderHelper';
import InfoModel from '../models/InfoModel';
import InfosProps from '../props/InfosProps';
import InfoProps from '../props/InfoProps';
import styles from './Info.module.css';
import { JSX } from 'react';

const Infos = ({ infosHeader, infoList }: InfosProps) => 
{

    const Info = ({info}: InfoProps) => (
        <div className={styles.container}>
            <img
                src={info.imgSrc}
                alt={info.imgAlt}
                title={info.imgTitle} 
            />
            <div className={styles.textContainer}>
                <h2>{info.header}</h2>
                <h3>{info.text}</h3>
            </div>
        </div>
    )

    const infos: JSX.Element[] = infoList.map((info: InfoModel) => (
        <Info info={info} />
    ));

    const [part1, part2, part3] = splitSentenceByWords(infosHeader);

    return (       
        <div className={styles.container} data-id="skills-container">
            <div className={styles.headerContainer}>
                <h2>
                    <span className='titleWord titleWord1'>{part1} </span>
                    <span className='titleWord titleWord2'>{part2} </span>
                    <span className='titleWord titleWord3'>{part3}</span>
                </h2>
            </div>
            <div data-id="skills-main-content-container" className={styles.mainContentContainer}>
                {infos}
            </div>
        </div>
    )
}

export default Infos;
