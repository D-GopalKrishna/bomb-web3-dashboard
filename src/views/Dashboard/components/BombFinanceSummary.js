import React, { useMemo } from 'react'
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
import useBombFinance from '../../../hooks/useBombFinance';

const BombFinanceSummary = () => {
    const estimatedTWAP = useCashPriceInEstimatedTWAP()
    const estimatedTWAPPriceDollar = useMemo(() => (estimatedTWAP ? Number(estimatedTWAP.priceInDollars).toFixed(4) : null), [estimatedTWAP]);
    const currentEpoch = useCurrentEpoch()
    const { to } = useTreasuryAllocationTimes();

    const lastTWAP = useCashPriceInLastTWAP()
    const TVL = useTotalValueLocked();
    const bombStats = useBombStats();
    const bShareStats = usebShareStats();
    const tBondStats = useBondStats();
    const bombFinance = useBombFinance();
    const bombPriceInDollars = useMemo(
        () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
        [bombStats],
    );
    const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(4) : null), [bombStats]);
    const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
    const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);

    const bSharePriceInDollars = useMemo(
        () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
        [bShareStats],
    );
    const bSharePriceInBNB = useMemo(
        () => (bShareStats ? Number(bShareStats.tokenInFtm).toFixed(4) : null),
        [bShareStats],
    );
    const bShareCirculatingSupply = useMemo(
        () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
        [bShareStats],
    );
    const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);

    const tBondPriceInDollars = useMemo(
        () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
        [tBondStats],
    );
    const tBondPriceInBNB = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
    const tBondCirculatingSupply = useMemo(
        () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
        [tBondStats],
    );
    const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

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
                            <TokenSymbol size={22} symbol={'BOMB'} />
                            <p style={styles.text}>$BOMB</p>
                        </div>
                        <p style={styles.SecondCol}>{bombCirculatingSupply ? bombCirculatingSupply : 0}</p>
                        <p style={styles.ThirdCol}>{bombTotalSupply ? bombTotalSupply : 0}</p>
                        <div style={styles.FourthCol}>
                            <p>${bombPriceInDollars ? bombPriceInDollars : 0}</p>
                            <p>{bombPriceInBNB ? bombPriceInBNB : 0} BTCB</p>
                        </div>
                        <button style={styles.FifthCol} 
                        onClick={() => {
                            bombFinance.watchAssetInMetamask('BOMB');
                        }}
                        >
                            <img style={{ width: 40, marginTop: 10 }} src={MetaMaskLogo} alt={"Metamask Logo"} />
                        </button>
                    </div>
                    <div style={styles.EachRoww}>
                        <div style={styles.FirstCol}>
                            <TokenSymbol size={22} symbol={'BSHARE'} />
                            <p style={styles.text}>$BSHARE</p>
                        </div>
                        <p style={styles.SecondCol}>{bShareCirculatingSupply ? bShareCirculatingSupply : 0}</p>
                        <p style={styles.ThirdCol}>{bShareTotalSupply ? bShareTotalSupply : 0}</p>
                        <div style={styles.FourthCol}>
                            <p>${bSharePriceInDollars ? bSharePriceInDollars : 0}</p>
                            <p>{bSharePriceInBNB ? bSharePriceInBNB : 0} BTCB</p>
                        </div>
                        <button style={styles.FifthCol}
                        onClick={() => {
                            bombFinance.watchAssetInMetamask('BSHARE');
                        }}>
                            <img style={{ width: 40, marginTop: 20 }} src={MetaMaskLogo} alt={"Metamask Logo"} />
                        </button>
                    </div>
                    <div style={styles.EachRoww}>
                        <div style={styles.FirstCol}>
                            <TokenSymbol size={22} symbol={'BBOND'} />
                            <p style={styles.text}>$BBOND</p>
                        </div>
                        <p style={styles.SecondCol}>{tBondCirculatingSupply ? tBondCirculatingSupply : 0}</p>
                        <p style={styles.ThirdCol}>{tBondTotalSupply ? tBondTotalSupply : 0}</p>
                        <div style={styles.FourthCol}>
                            <p>${tBondPriceInDollars ? tBondPriceInDollars : 0}</p>
                            <p>{tBondPriceInBNB ? tBondPriceInBNB : 0} BTCB</p>
                        </div>
                        <button style={styles.FifthCol}
                        onClick={() => {
                            bombFinance.watchAssetInMetamask('BBOND');
                        }}>
                            <img style={{ width: 40, marginTop: 20 }} src={MetaMaskLogo} alt={"Metamask Logo"} />
                        </button>
                    </div>
                </div>
                <div>

                </div>
                <div style={styles.RightContainer}>
                    <div style={styles.EpochContainer}>
                        <p style={styles.smallTitleText}>Current Epoch</p>
                        <p style={styles.BigText}>{Number(currentEpoch)}</p>
                    </div>
                    <div style={styles.CounterStyle}>
                        <ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" />
                        <p style={styles.smallTitleText}>Next Epoch in</p>
                    </div>
                    <div>
                        <p>Live TWAP: <text style={{ color: "#00E8A2" }}>{estimatedTWAPPriceDollar ? estimatedTWAPPriceDollar : 0}</text></p>
                        <p>TVL: <text style={{ color: "#00E8A2" }}>${TVL ? Math.floor(TVL) : 0}</text></p>
                        <p>Last Epoch TWAP: <text style={{ color: "#00E8A2" }}>{lastTWAP ? (Number(lastTWAP)/Math.pow(10,14)).toFixed(4) : 0}</text></p>
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
        maxWidth: '30%'
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
        backgroundColor: 'transparent',
        border: 'none',
        padding: '0px', 
        margin: '0px',
        // remove all the button styles 
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none',
        appearance: 'none',
        cursor: 'pointer',
        outline: 'none',
        marginTop: -10
    },

}