import { JSX } from "react";
import PageHeaderProps from "../props/PageHeaderProps";
import styles from './PageHeader.module.css';

const PageHeader: React.FC<PageHeaderProps> = ({headerText}: PageHeaderProps): JSX.Element => {
    const splitSentenceByWords: (sentece: string) => [string, string, string] 
    = (sentence: string): [string, string, string] => {
        const words: string[] = sentence.trim().split(/\s+/);
        const n: number = words.length;

        const part1: string = words.slice(0, Math.floor(n / 3)).join(' ');
        const part2: string = words.slice(Math.floor(n / 3), Math.floor(2 * n / 3)).join(' ');
        const part3: string = words.slice(Math.floor(2 * n / 3)).join(' ');
        return [part1, part2, part3];
    }

    const [part1, part2, part3]: [string, string, string] = splitSentenceByWords(headerText);

    return (
        <div className={styles.headerContainer}>
            <h2>
                <span className='titleWord titleWord1'>{part1} </span>
                <span className='titleWord titleWord2'>{part2} </span>
                <span className='titleWord titleWord3'>{part3}</span>
            </h2>
        </div>
    )
}

export default PageHeader;