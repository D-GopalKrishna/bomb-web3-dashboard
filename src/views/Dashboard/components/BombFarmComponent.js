import React, { useMemo } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import useBanks from '../../../hooks/useBanks';
import useBombStats from '../../../hooks/useBombStats';
import TokenSymbol from '../../../components/TokenSymbol';
import theme from '../../../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const BombFarmComponent = () => {
    const [banks] = useBanks();
    const bombStats = useBombStats();
    const { path } = useRouteMatch();
    // console.log("banks", banks)
  
  
    // const bombBTCB_Id = "BombBtcbLPBShareRewardPool"
    // const bankBOMBBTCB = useBank(bombBTCB_Id);
    // console.log("bankBOMBBTCB", bankBOMBBTCB)
    // let statsOnPool = useStakeToBomb(bankBOMBBTCB);
    // console.log("statsOnPool", Number(statsOnPool))
  
  
  
    // const bank = useBank(bankId);
    // let statsOnPool = useStakeToBomb(bank);
  
  
    return (
        <div style={styles.container}>
            <div style={styles.heading}>
                <div style={styles.marginAdjustTitle}>
                    <p style={styles.Title}>Bomb Farms</p>
                    <p style={styles.TitleBottomText}>Stake your LP tokens in our farms to start earning $BSHARE</p>
                </div>
                <button style={styles.BtnStyleAllReward}>
                    <p style={styles.BtnText}>Claim All</p>
                    <TokenSymbol size={20} symbol={'BOMB-BTCB-APELP'} />
                </button>
            </div>

            <div style={styles.EachTitleComponent}>
                <div style={styles.EachTitleLeft}>
                    <TokenSymbol size={32} symbol={'BOMB-BTCB-LP'} />
                    <p style={styles.FarmTitleText}>BOMB_BTCB</p>
                    <p style={styles.RecommendedStyle}>Recommended</p>
                </div>
                <p style={styles.text}>TVL: $123123</p>
            </div>

            <div style={styles.StatsBtnContainer}>
                <div style={styles.StatsContainer}>
                    <div>
                        <p style={styles.text}>Daily Returns:</p>
                        <p style={styles.Title}>2%</p>
                    </div>
                    <div>
                        <p style={styles.text}>Your Stake:</p>
                        <div style={styles.FlexRowStyle}>
                            <TokenSymbol size={20} symbol={'BOMB-BTCB-LP'} />
                            <p style={styles.text}>123123</p>
                        </div>
                        <p style={styles.text}>≈ $12213</p>
                    </div>
                    <div>
                        <p style={styles.text}>Earned:</p>
                        <div style={styles.FlexRowStyle}>
                            <TokenSymbol size={20} symbol={'BOMB-BTCB-LP'} />
                            <p style={styles.text}>123123</p>
                        </div>
                        <p style={styles.text}>≈ $12213</p>
                    </div>
                </div>
                <div style={styles.BtnContainer}>
                    <button style={styles.BtnStyle}>
                        <p style={styles.BtnText}>Deposit</p>
                        <FontAwesomeIcon icon={faArrowUp} style={{}} />
                    </button>
                    <button style={styles.BtnStyle}>
                        <p style={styles.BtnText}>WithDraw</p>
                        <FontAwesomeIcon icon={faArrowDown} style={{}} />
                    </button>
                    <button style={styles.BtnStyle}>
                        <p style={styles.BtnText}>Claim Rewards</p>
                        <TokenSymbol size={20} symbol={'BOMB-BTCB-APELP'} />
                    </button>
                </div>
            </div>

            <div style={{width: '100%', borderBottom:"0.5px #00ADE8 solid", margin: '2% 0% 4% 0%'}} />

            <div style={styles.EachTitleComponent}>
                <div style={styles.EachTitleLeft}>
                    <TokenSymbol size={32} symbol={'BOMB-BTCB-LP'} />
                    <p style={styles.FarmTitleText}>BOMB_BTCB</p>
                    <p style={styles.RecommendedStyle}>Recommended</p>
                </div>
                <p style={styles.text}>TVL: $123123</p>
            </div>

            <div style={styles.StatsBtnContainer}>
                <div style={styles.StatsContainer}>
                    <div>
                        <p style={styles.text}>Daily Returns:</p>
                        <p style={styles.Title}>2%</p>
                    </div>
                    <div>
                        <p style={styles.text}>Your Stake:</p>
                        <div style={styles.FlexRowStyle}>
                            <TokenSymbol size={20} symbol={'BOMB-BTCB-LP'} />
                            <p style={styles.text}>123123</p>
                        </div>
                        <p style={styles.text}>≈ $12213</p>
                    </div>
                    <div>
                        <p style={styles.text}>Earned:</p>
                        <div style={styles.FlexRowStyle}>
                            <TokenSymbol size={20} symbol={'BOMB-BTCB-LP'} />
                            <p style={styles.text}>123123</p>
                        </div>
                        <p style={styles.text}>≈ $12213</p>
                    </div>
                </div>
                <div style={styles.BtnContainer}>
                    <button style={styles.BtnStyle}>
                        <p style={styles.BtnText}>Deposit</p>
                        <FontAwesomeIcon icon={faArrowUp} style={{}} />
                    </button>
                    <button style={styles.BtnStyle}>
                        <p style={styles.BtnText}>Withdraw</p>
                        <FontAwesomeIcon icon={faArrowDown} style={{}} />
                    </button>
                    <button style={styles.BtnStyle}>
                        <p style={styles.BtnText}>Claim Rewards</p>
                        <TokenSymbol size={20} symbol={'BOMB-BTCB-APELP'} />
                    </button>
                </div>
            </div>

        </div>

    )
}

export default BombFarmComponent


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',    
        width: '80%',
        margin: '2% auto',
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
        marginTop: '0px',
    },
    TitleBottomText: {
        fontSize: '15px',
        marginTop: '15px',
        marginBottom: '25px',
    },
    heading: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    marginAdjustTitle: {
        marginLeft: '10px',
        marginTop: '-15px',
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
        width: 'auto',
        minWidth: '120px',
    },
    BtnStyleAllReward: {
        borderColor: theme.bombFinanceColors.btnBorder,
        backgroundColor: 'transparent',
        color: theme.bombFinanceColors.text,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '20px',
        padding: '10px 12px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        width: 'auto',
        minWidth: '140px',
    },
    BtnText: {
        marginRight: '5px',
    },
    EachTitleComponent:{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #fff',
        alignItems: 'center',
    },
    EachTitleLeft: {
        display: 'flex',
    },
    FarmTitleText: {
        fontSize: '20px',
        marginLeft: '10px',
        marginTop: '0px',
        marginRight: '10px',
    },
    RecommendedStyle: {
        backgroundColor: '#00E8A2',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '12px',
        width: '100px',
        height: '20px',
        marginTop: '0px',
    },
    StatsBtnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        marginTop: '20px',
        marginBottom: '20px',
    },
    StatsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
    },
    BtnContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '500px',
        bottom: 0,
        right: 0,
        position: 'absolute',
    },
    FlexRowStyle: {
        display: 'flex',
    }
}