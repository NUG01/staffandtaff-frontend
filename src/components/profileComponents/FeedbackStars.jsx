import styles from '../../styles/profile/profile.module.css'
import StarIcon from '@/icons/StarIcon'
export default function FeedbackStars({ rating }) {
    const emptyStar = []
    const filledStar = []

    for (let index = 0; index < rating; index++) {
        filledStar.push(<StarIcon fill={true} />)
    }
    for (let index = 0; index < 5 - rating; index++) {
        emptyStar.push(<StarIcon fill={false} />)
    }

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                gap: '2px',
            }}>
            {filledStar.map(star => star)}
            {emptyStar.map(star => star)}

            <div
                style={{
                    fontWeight: '700',
                    fontSize: '14px',
                    marginLeft: '3px',
                }}>
                {rating}.0
            </div>
        </div>
    )
}
