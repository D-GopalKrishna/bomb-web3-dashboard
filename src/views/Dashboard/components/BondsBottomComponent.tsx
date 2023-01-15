import React from 'react'
import useBombFinance from '../../../hooks/useBombFinance';
import TokenSymbol from '../../../components/TokenSymbol';
import useBondsPurchasable from '../../../hooks/useBondsPurchasable';
import useTokenBalance from '../../../hooks/useTokenBalance';
import theme from '../../../theme';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const BondsBottomComponent = () => {
    const bombFinance = useBombFinance();
    const bondsPurchasable = useBondsPurchasable();
    const bondBalance = useTokenBalance(bombFinance?.BBOND);
  
    return (
        <div style={styles.container}>
            <div style={styles.heading}>
                <TokenSymbol size={40} symbol={'BBOND'}  />
                <div style={styles.marginAdjustTitle}>
                    <p style={styles.Title}>Bonds</p>
                    <p style={styles.text}>BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1</p>
                </div>
            </div>

            <div style={styles.FlexContainerBot}>
                <div style={styles.CurrentPriceContainer}>
                    <p style={styles.text}>Current Price: (Bomb)^2</p>
                    <p style={styles.Title}>BBond = 6.3423 BTCB</p>
                </div>
                <div style={styles.RedeemContainer}>
                    <p style={styles.text}>Available to redeem:</p>
                    <div style={styles.RedeemSymbol}>
                        <TokenSymbol size={32} symbol={'BBOND'}  />
                        <p style={styles.redeemText}>123123</p>
                    </div>
                </div>
                <div style={styles.BtnContainer}>
                    <div style={styles.EachBtn}>
                        <div>
                            <p>Purchase BBond</p>
                            <p>Bomb is over peg</p>
                        </div>
                        <button style={styles.BtnStyle}>
                            <p style={styles.BtnText}>Purchase</p>
                            <FontAwesomeIcon icon={faShoppingCart} style={{}} />
                        </button>
                    </div>
                    <hr />
                    <div style={styles.EachBtn}>
                        <div>
                            <p>Purchase BBond</p>
                        </div>
                        <button style={styles.BtnStyle}>
                            <p style={styles.BtnText}>Redeem</p>
                            <FontAwesomeIcon icon={faArrowDown} style={{}} />
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BondsBottomComponent

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',    
        width: '80%',
        margin: '5% auto',
        height: '100%',
        backgroundColor: theme.bombFinanceColors.cardBg,
        borderColor: theme.bombFinanceColors.cardBorder,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '10px',
        padding: '20px 40px',
        color: theme.bombFinanceColors.text,
    },
    Title:{ 
        fontSize: '25px',
        marginBottom: '-6px',
    },
    text: {
        fontSize: '15px',
    },
    heading: {
        display: 'flex',
    },
    marginAdjustTitle: {
        marginLeft: '10px',
        marginTop: '-15px',
    },
    FlexContainerBot: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    CurrentPriceContainer: {
        width: '33%',
    },
    RedeemContainer: {
        width: '24%',
    },
    BtnContainer:{
        width: '43%',
    },
    RedeemSymbol: {
        display: 'flex',
    }, 
    redeemText: {
        fontSize: '35px',
        marginTop: '0px',
        marginLeft: '10px',
    },
    EachBtn: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
    },
    BtnStyle: {
        borderColor: theme.bombFinanceColors.btnBorder,
        backgroundColor: 'transparent',
        color: theme.bombFinanceColors.text,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '20px',
        padding: '10px 12px',
        height: '40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 0,
        width: 120,
    },
    BtnText: {
        marginRight: '5px',
    }
}