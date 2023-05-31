import styles from '../../styles/profile/profile.module.css'
import StarIcon from '@/icons/StarIcon'
export default function FeedbackStars() {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                gap: '2px',
            }}>
            <StarIcon fill={true} />
            <StarIcon fill={true} />
            <StarIcon fill={true} />
            <StarIcon />
            <StarIcon />
            <div
                style={{
                    fontWeight: '700',
                    fontSize: '14px',
                    marginLeft: '3px',
                }}>
                3.0
            </div>
        </div>
    )
}
