import InfoModel from '../../models/InfoModel';
import InfosProps from '../../props/InfosProps';
import InfoProps from '../../props/InfoProps';
import styles from './Infos.module.css';
import './Infos.css';
import { JSX } from 'react';
import PageHeader from '../generalPageComponents/PageHeader';
import CircleBackground from '../designComponents/CircleBackground';
import CircleBackgroundSide from '../../enums/CircleBackgroundSide';

const Infos: React.FC<InfosProps> = ({ infosHeader, infoList, circleBackgroundSide }: InfosProps): JSX.Element => 
{

    const Info: React.FC<InfoProps> = ({info}: InfoProps): JSX.Element => (
        <div data-id="infos-container" className={styles.container}>
            <img 
                alt={info.imgAlt}
                title={info.imgTitle}
                src={info.imgSrc} 
                className={styles.img}
                style={{
                    display: info.imgSrc == null ? "none" : "block"
                }}
            />
            <div className={styles.textContainer}>
                <h3>{info.header}</h3>
                <p>{info.text}</p>
            </div>
        </div>
    )

    const infos: JSX.Element[] = infoList.map((info: InfoModel) => (
        <Info info={info} key={info.header} />
    ));

    return (       
        <div className={styles.mainContainer} data-id="infos-main-container">
            <CircleBackground side={circleBackgroundSide} />
            <PageHeader headerText={infosHeader} />
            <div data-id="infos-content-container" className={styles.contentContainer}>
                {infos}
            </div>
        </div>
    )
}

export default Infos;
