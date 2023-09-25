import webpack from './images/webpack.png'
import classes from './styles/style.module.scss'

export const App = () => {
    return (
        <>
            <div className={classes.head}><h1>Webpack Course!</h1></div>
            <div className={classes.body}><img src={webpack} alt=""/></div>
            <div className={classes.foot}><h2>Thanks</h2></div>
        </>
    )
}