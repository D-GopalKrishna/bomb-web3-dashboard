import React, { useMemo } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import useBanks from '../../../hooks/useBanks';
import useBombStats from '../../../hooks/useBombStats';
import TokenSymbol from '../../../components/TokenSymbol';
import theme from '../../../theme';

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
                    <p style={styles.text}>Sake your LP tokens</p>
                </div>
                <button style={styles.BtnStyle}>
                    <p style={styles.BtnText}>Claim All</p>
                    <TokenSymbol size={12} symbol={'BTCB'} />
                </button>
            </div>

            <div>
                <div>
                    <TokenSymbol size={32} symbol={'BTCB'} />
                    <p>BOMB_BTCB</p>
                    <p>Recommended</p>
                </div>
                <p>TVL:$123123</p>
                <hr />
            </div>

            <div>
                <div>
                    <div>
                        <p>Daily Returns:</p>
                        <p>2%</p>
                    </div>
                    <div>
                        <p>Your Stake:</p>
                        <div>
                            {/* <TokenSymbol size={12} symbol={{}} /> */}
                            <p>123123</p>
                        </div>
                        <p>≈ $12213</p>
                    </div>
                    <div>
                        <p>Earned:</p>
                        <div>
                            {/* <TokenSymbol size={12} symbol={{}} /> */}
                            <p>123123</p>
                        </div>
                        <p>≈ $12213</p>
                    </div>
                </div>
                <div>
                    <button>
                        <p>Deposit</p>
                        {/* <icon /> */}
                    </button>
                    <button>
                        <p>Withdraw</p>
                        {/* <icon /> */}
                    </button>
                    <button>
                        <p>Claim Rewards</p>
                        {/* <icon /> */}
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