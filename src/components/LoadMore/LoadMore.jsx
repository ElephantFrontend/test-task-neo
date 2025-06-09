import css from "./LoadMore.module.css"

function LoadMore ({onClick}) {

    return (
        <>
            <div className={css['load-more']}>
                <button className={css['load-more-btn']} onClick={onClick}>Load More</button>
            </div>
        </>
    )
}

export default LoadMore
