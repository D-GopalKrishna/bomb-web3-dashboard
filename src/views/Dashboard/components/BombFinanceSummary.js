import React, {useMemo} from 'react'
import TokenSymbol from '../../../components/TokenSymbol';
import useBombStats from '../../../hooks/useBombStats';
import useBondStats from '../../../hooks/useBondStats';
import usebShareStats from '../../../hooks/usebShareStats';
import useCurrentEpoch from '../../../hooks/useCurrentEpoch';
import useCashPriceInEstimatedTWAP from '../../../hooks/useCashPriceInEstimatedTWAP';
import useCashPriceInLastTWAP from '../../../hooks/useCashPriceInLastTWAP';
import ProgressCountdown from '../../Boardroom/components/ProgressCountdown';
import useTreasuryAllocationTimes from '../../../hooks/useTreasuryAllocationTimes';
import useTotalValueLocked from '../../../hooks/useTotalValueLocked';
import moment from 'moment';
import theme from '../../../theme';
import MetaMaskLogo from '../../../assets/img/MetaMask.png';

const BombFinanceSummary = () => {


    const bombStats = useBombStats();
    const bondStats = useBondStats();
    const bshareStats = usebShareStats();
    const currentEpoch = useCurrentEpoch()
    const { to } = useTreasuryAllocationTimes();
    const estimatedTWAP = useCashPriceInEstimatedTWAP()
    const estimatedTWAPPriceDollar = useMemo(() => (estimatedTWAP ? Number(estimatedTWAP.priceInDollars).toFixed(4) : null), [estimatedTWAP]);
    const TVL = useTotalValueLocked();
    const lastTWAP = useCashPriceInLastTWAP()


    // console.log("bombStats", bombStats)
    // console.log("bondStats", bondStats)
    // console.log("bshareStats", bshareStats)
    // console.log("currentEpoch", Number(currentEpoch))
    // console.log("to", to)
    // console.log("estimatedTWAPPriceDollar", estimatedTWAPPriceDollar)
    // console.log("TVL", TVL)
    // console.log("lastTWAP", Number(lastTWAP))


    return (
        <div style={styles.container}>
            <h1 style={styles.Title}>Bomb Finance Summary</h1>
            <div style={styles.MainContainer}>
                <div style={styles.LeftContainer}>
                    <div style={styles.EachRowwBorderBottom}>
                        <p style={styles.FirstCol}></p>
                        <p style={styles.SecondCol}>Current Supply</p>
                        <p style={styles.ThirdCol}>Total Supply</p>
                        <p style={styles.FourthCol}>Price</p>
                        <p style={styles.FifthCol}></p>
                    </div>
                    <div style={styles.EachRoww}>
                        <div style={styles.FirstCol}>
                            <TokenSymbol size={22} symbol={'BOMB-BTCB-APELP'} />
                            <p style={styles.text}>$BOMB</p>
                        </div>
                        <p style={styles.SecondCol}>8.66M</p>
                        <p style={styles.ThirdCol}>10.00M</p>
                        <div style={styles.FourthCol}>
                            <p>$0.24</p>
                            <p>1.05 BTCB</p>
                        </div>
                        <div style={styles.FifthCol}>
                            <img style={{width: 40, marginTop: 10}} src={MetaMaskLogo} alt={"Metamask Logo"} />
                        </div>
                    </div>
                    <div style={styles.EachRoww}>
                        <div style={styles.FirstCol}>
                            <TokenSymbol size={22} symbol={'BOMB-BTCB-APELP'} />
                            <p style={styles.text}>$BOMB</p>
                        </div>
                        <p style={styles.SecondCol}>8.66M</p>
                        <p style={styles.ThirdCol}>10.00M</p>
                        <div style={styles.FourthCol}>
                            <p>$0.24</p>
                            <p>1.05 BTCB</p>
                        </div>
                        <div style={styles.FifthCol}>
                            <img style={{width: 40, marginTop: 20}} src={MetaMaskLogo} alt={"Metamask Logo"} />
                        </div>
                    </div>
                    <div style={styles.EachRoww}>
                        <div style={styles.FirstCol}>
                            <TokenSymbol size={22} symbol={'BOMB-BTCB-APELP'} />
                            <p style={styles.text}>$BOMB</p>
                        </div>
                        <p style={styles.SecondCol}>8.66M</p>
                        <p style={styles.ThirdCol}>10.00M</p>
                        <div style={styles.FourthCol}>
                            <p>$0.24</p>
                            <p>1.05 BTCB</p>
                        </div>
                        <div style={styles.FifthCol}>
                            <img style={{width: 40, marginTop: 20}} src={MetaMaskLogo} alt={"Metamask Logo"} />
                        </div>
                    </div>
                </div>
                <div>

                </div>
                <div style={styles.RightContainer}>
                    <div style={styles.EpochContainer}>
                        <p style={styles.smallTitleText}>Current Epoch</p>
                        <p style={styles.BigText}>258</p>
                    </div>
                    <div style={styles.CounterStyle}>
                        <ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" />
                        <p style={styles.smallTitleText}>Next Epoch in</p>
                    </div>
                    <div>
                        <p>Live TWAP: <text style={{color: "#00E8A2"}}>1.17</text></p>
                        <p>TVL: <text style={{color: "#00E8A2"}}>$123123</text></p>
                        <p>Last Epoch TWAP: <text style={{color: "#00E8A2"}}>1.22</text></p>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default BombFinanceSummary


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',    
        width: '80%',
        margin: '2% auto',
        height: '100%',
        backgroundColor: theme.bombFinanceColors.cardBg,
        borderRadius: '10px',
        padding: '20px 40px',
        color: theme.bombFinanceColors.text,
    },
    Title: {
        fontSize: '24px',
        fontWeight: 'normal',
        color: theme.bombFinanceColors.text,
        textAlign: 'center',
        borderBottom: '1px solid #aaa',
        paddingBottom: '10px',
    },
    MainContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    LeftContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
    },
    RightContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px',
    },
    EpochContainer: {
        borderBottom: '1px solid #aaa',
    },
    smallTitleText: {
        fontSize: '15px',
        fontWeight: 'normal',
        marginTop: '0px',
        marginBottom: '10px',
        textAlign: 'center',
    },
    CounterStyle: {
        fontSize: '36px',
        borderBottom: '1px solid #aaa',
        paddingBottom: '30px',
        textAlign: 'center',
    },
    BigText: {
        fontSize: '36px',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '0px',
        marginBottom: '10px',
    },
    EachRowwBorderBottom: {
        borderBottom: '1px solid #aaa',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: '25px',
    },
    EachRoww: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
    },
    // Columns styles
    FirstCol: {
        width: '140px',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20
    },
    text: {
        marginLeft: '10px',
        marginTop: '0px',
    },
    SecondCol: {
        width: '20%',
    },
    ThirdCol: {
        width: '15%',
    },
    FourthCol: {
        width: '20%',
        textAlign: 'center',
    },
    FifthCol: {
        width: '100px',
    },

}