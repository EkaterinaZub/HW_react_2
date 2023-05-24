import { LogoFooter } from './LogoFooter/LogoFooter';
import styles from './Footer.module.css'
import { FooterNavigation } from './FooterNavigation/FooterNavigation';
import { ArrowFooter } from './ArrowFooter/ArrowFooter';
import { EffectComponents } from './EffectComponents/EffectComponents';

export const Footer = ({ weather, showMenu, setShowMenu }) => {
    return (
        <div className={styles.container}>
            <ArrowFooter />
            <LogoFooter />
            <FooterNavigation showMenu={showMenu} setShowMenu={setShowMenu} />
            <EffectComponents weather={weather} />

        </div>
    )

}