import style from './Clock.module.scss';

interface Props {
    time: number | undefined
}

export function Clock({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minutesFirst, minutesSecond] = String(minutes).padStart(2, '0');
    const [secondsFirst, secondsSecond] = String(seconds).padStart(2, '0');

    return (
        <>
            <span className={style.clockNumber}>{minutesFirst}</span>
            <span className={style.clockNumber}>{minutesSecond}</span>
            <span className={style.clockDivision}>:</span>
            <span className={style.clockNumber}>{secondsFirst}</span>
            <span className={style.clockNumber}>{secondsSecond}</span>
        </>
    )
}