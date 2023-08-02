import css from './Btn.module.css';

export const Btn = ({
    selected = false,
    type = 'button',
    children,
    ...otherProps}) => {
    return (
        <button className={css.btn} type={type} {...otherProps}>{children}</button>
    )
};