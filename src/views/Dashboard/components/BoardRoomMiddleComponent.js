import React, { useMemo, useEffect, useState } from 'react';
import TokenSymbol from '../../../components/TokenSymbol';
import useBombStats from '../../../hooks/useBombStats';
import useEarningsOnBoardroom from '../../../hooks/useEarningsOnBoardroom';
import { getDisplayBalance } from '../../../utils/formatBalance';
import useStakedBalanceOnBoardroom from '../../../hooks/useStakedBalanceOnBoardroom';
import useFetchBoardroomAPR from '../../../hooks/useFetchBoardroomAPR';
import useTotalStakedOnBoardroom from '../../../hooks/useTotalStakedOnBoardroom';
import theme from '../../../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { roundAndFormatNumber } from '../../../0x';
import useClaimRewardCheck from '../../../hooks/boardroom/useClaimRewardCheck';
import useWithdrawCheck from '../../../hooks/boardroom/useWithdrawCheck';
import useStakeToBoardroom from '../../../hooks/useStakeToBoardroom';
import useWithdrawFromBoardroom from '../../../hooks/useWithdrawFromBoardroom';
import useHarvestFromBoardroom from '../../../hooks/useHarvestFromBoardroom';
import { getFullDisplayBalance } from '../../../utils/formatBalance';
import useTokenBalance from '../../../hooks/useTokenBalance';
import useBombFinance from '../../../hooks/useBombFinance';
import useModal from '../../../hooks/useModal';
import DepositModal from '../../Bank/components/DepositModal';
import WithdrawModal from '../../Bank/components/WithdrawModal';


const BoardRoomMiddleComponent = () => {
    const bombStats = useBombStats();
    const tokenPriceInDollars = useMemo(
        () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
        [bombStats],
    );
    const bombFinance = useBombFinance();

    const stakedBalance = useStakedBalanceOnBoardroom();
    const stakedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(stakedBalance))).toFixed(2);
    const earnings = useEarningsOnBoardroom();
    const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);
    const boardroomAPR = useFetchBoardroomAPR();
    const totalStaked = useTotalStakedOnBoardroom();

    // TVL for boardroom
    const xbombTVL = useMemo(() => {
        return (Number(getDisplayBalance(totalStaked)) * Number(tokenPriceInDollars)).toFixed(2);
    }, [tokenPriceInDollars, totalStaked]);

    const canClaimReward = useClaimRewardCheck();
    const canWithdraw = useWithdrawCheck();

    // // Withdraw, Deposit, and Reward Functions
    const { onStake } = useStakeToBoardroom();
    const { onWithdraw } = useWithdrawFromBoardroom();
    const { onReward } = useHarvestFromBoardroom();
    // const MaxtokenBalance = useTokenBalance(bombFinance.BSHARE);

    // const [Depositval, setVal] = useState('');

    // const fullBalance = useMemo(() => {
    //     return getFullDisplayBalance(MaxtokenBalance, 18);    // 18 since this is BSHARE
    // }, [MaxtokenBalance]);

    // useEffect(() => {
    //     setVal(Number(fullBalance));
    // }, [fullBalance, setVal]);
    const tokenBalance = useTokenBalance(bombFinance.BSHARE);

    const [onPresentDeposit, onDismissDeposit] = useModal(
        <DepositModal
            max={tokenBalance}
            onConfirm={(value) => {
                onStake(value);
                onDismissDeposit();
            }}
            tokenName={'BShare'}
        />,
    );

    const [onPresentWithdraw, onDismissWithdraw] = useModal(
        <WithdrawModal
            max={stakedBalance}
            onConfirm={(value) => {
                onWithdraw(value);
                onDismissWithdraw();
            }}
            tokenName={'BShare'}
        />,
    );
    return (
        <div style={styles.container}>
            <div style={styles.LeftContainer}>
                <div style={styles.InvestmentRead}>
                    <p style={{ textDecoration: 'underline', color: '#9EE6FF' }}>Read Investment Strategy {'>'}</p>
                </div>
                <button style={styles.InvestBtn}>
                    <p>Invest Now</p>
                </button>
                <div style={styles.TwoBtn}>
                    <button
                        style={styles.SmallBtn}
                        onClick={() => {
                            window.open('https://discord.gg/tombfinance', '_blank');
                        }}
                    >
                        <img
                            style={{ width: 30, marginRight: 10 }}
                            src="https://img.icons8.com/ios-filled/50/000000/discord-logo.png"
                            alt="discord"
                        />
                        <p>Chat on Discord</p>
                    </button>
                    <button
                        style={styles.SmallBtn}
                        onClick={() => {
                            window.open('https://docs.tomb.finance/', '_blank');
                        }}
                    >
                        <img
                            style={{ width: 30, marginRight: 10 }}
                            src="https://img.icons8.com/ios-glyphs/2x/document.png"
                            alt="discord"
                        />
                        <p>Read Docs</p>
                    </button>
                </div>
                <div style={styles.BoardTitleContainer}>
                    <div style={styles.EachTitleComponent}>
                        <div style={styles.RowFlex}>
                            <TokenSymbol size={32} symbol={'BSHARE'} />
                            <div style={styles.EachTitleLeft}>
                                <div style={styles.FarmTitleText}>
                                    <p style={styles.BigText}>Boardroom</p>
                                    <p style={styles.RecommendedStyle}>Recommended</p>
                                </div>
                                <p style={styles.text}>Stake BSHARE and earn BOMB every epoch</p>
                            </div>
                        </div>
                        <p style={styles.text}>TVL: ${roundAndFormatNumber(xbombTVL, 2)}</p>
                    </div>
                    <hr />
                    <div>
                        <div style={styles.TotalStacked}>
                            <p style={styles.text}>{getDisplayBalance(totalStaked)}</p>
                            <TokenSymbol size={20} symbol={'BSHARE'} />
                            <p style={styles.text}>Total Staked:</p>
                        </div>
                    </div>
                    <div style={styles.LowerSection}>
                        <div style={styles.InfoContainer}>
                            <div>
                                <p>Daily Returns:</p>
                                <p style={styles.BigText}>{boardroomAPR ? boardroomAPR.toFixed(2) : 0}%</p>
                            </div>
                            <div>
                                <p>Your Stake:</p>
                                <div style={styles.IconWithText}>
                                    <TokenSymbol size={20} symbol={'BSHARE'} />
                                    <p style={styles.text}>{stakedBalance ? Number(stakedBalance) : 0}</p>
                                </div>
                                <p style={styles.text}>??? ${stakedInDollars ? stakedInDollars : 0}</p>
                            </div>
                            <div>
                                <p>Earned:</p>
                                <div style={styles.IconWithText}>
                                    <TokenSymbol size={20} symbol={'BOMB'} />
                                    <p style={styles.text}>{earnings ? Number(earnings) : 0}</p>
                                </div>
                                <p style={styles.text}>??? ${earnedInDollars ? earnedInDollars : 0}</p>
                            </div>
                        </div>
                        <div style={styles.BtnContainer}>
                            <div style={styles.RowBtn}>
                                <button
                                    style={styles.BtnStyle}
                                    onClick={onPresentDeposit}
                                >
                                    <p style={styles.BtnText}>Deposit</p>
                                    <FontAwesomeIcon icon={faArrowUp} style={{}} />
                                </button>
                                <div style={{ width: '48%', opacity: canWithdraw ? 1 : 0.5 }}>
                                    <button
                                        style={styles.BtnInsideStyle}
                                        onClick={canWithdraw ? onPresentWithdraw : ()=>{}}
                                    >
                                        <p style={styles.BtnText}>Withdraw</p>
                                        <FontAwesomeIcon icon={faArrowDown} style={{}} />
                                    </button>
                                </div>
                            </div>
                            <div style={styles.RowBtn}>
                                <div style={{ width: '100%', opacity: canClaimReward ? 1 : 0.5 }}>
                                    <button
                                        style={styles.RewardContainer}
                                        onClick={canClaimReward ? onReward :  ()=>{}}
                                    >
                                        <p style={styles.BtnText}>Claim Rewards</p>
                                        <TokenSymbol size={20} symbol={'BSHARE'} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={styles.RightContainer}>
                <p>Latest News</p>
            </div>
        </div>
    );
};

export default BoardRoomMiddleComponent;

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '2% auto',
        width: '106%',
    },
    LeftContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '74%',
        marginRight: '2%',
    },
    RightContainer: {
        display: 'flex',
        width: '24%',
        borderColor: theme.bombFinanceColors.cardBorder,
        borderStyle: 'solid',
        borderWidth: '1px',
        backgroundColor: theme.bombFinanceColors.cardBg,
        borderRadius: '10px',
        padding: '20px 40px',
        color: theme.bombFinanceColors.text,
    },
    InvestmentRead: {
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    InvestBtn: {
        background:
            'radial-gradient(59345.13% 4094144349.28% at 39511.5% -2722397851.45%, rgba(0, 245, 171, 0.5) 0%, rgba(0, 173, 232, 0.5) 100%)',
        height: '45px',
        width: '100%',
        border: 'none',
        color: theme.bombFinanceColors.text,
        fontSize: '16px',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    BtnP: {},
    TwoBtn: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        margin: '10px 0',
    },
    SmallBtn: {
        width: '49%',
        fontSize: '16px',
        fontWeight: 'bold',
        height: '45px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#aaa',
        border: 'none',
        cursor: 'pointer',
    },
    LowerSection: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    BoardTitleContainer: {
        borderColor: theme.bombFinanceColors.cardBorder,
        borderStyle: 'solid',
        borderWidth: '1px',
        backgroundColor: theme.bombFinanceColors.cardBg,
        padding: '20px 40px',
        borderRadius: '10px',
        color: theme.bombFinanceColors.text,
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
        width: '48%',
    },
    BtnInsideStyle: {
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
        width: '100%',
    },
    BtnText: {
        marginRight: '5px',
    },
    RewardContainer: {
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
        width: '100%',
    },
    RowBtn: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: '10px',
    },
    InfoContainer: {
        display: 'flex',
        width: '60%',
        marginRight: '10%',
        justifyContent: 'space-between',
    },
    BtnContainer: {
        width: '30%',
    },
    EachTitleComponent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    EachTitleLeft: {
        display: 'flex',
        flexDirection: 'column',
    },
    FarmTitleText: {
        fontSize: '20px',
        marginLeft: '10px',
        marginTop: '0px',
        marginRight: '10px',
        display: 'flex',
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
        marginTop: '5px',
        marginLeft: 0,
    },
    BigText: {
        fontSize: '25px',
        marginTop: 0,
        marginBottom: 10,
        marginRight: 10,
    },
    text: {
        fontSize: '15px',
        marginTop: 0,
        marginLeft: '6px',
    },
    RowFlex: {
        display: 'flex',
    },
    TotalStacked: {
        display: 'flex',
        flexDirection: 'row-reverse',
        marginBottom: '30px',
    },
    IconWithText: {
        display: 'flex',
    },
};
