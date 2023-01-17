import React, {useMemo, useCallback} from 'react';
import useBombFinance from '../../../hooks/useBombFinance';
import TokenSymbol from '../../../components/TokenSymbol';
import useBondsPurchasable from '../../../hooks/useBondsPurchasable';
import useTokenBalance from '../../../hooks/useTokenBalance';
import theme from '../../../theme';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import useCashPriceInLastTWAP from '../../../hooks/useCashPriceInLastTWAP';
import {useTransactionAdder} from '../../../state/transactions/hooks';
import ExchangeStat from '../../Bond/components/ExchangeStat';
import {getDisplayBalance} from '../../../utils/formatBalance';
import useBondStats from '../../../hooks/useBondStats';
import { BOND_REDEEM_PRICE, BOND_REDEEM_PRICE_BN } from '../../../bomb-finance/constants';
import useModal from '../../../hooks/useModal';
import ExchangeModal from '../../Bond/components/ExchangeModal';


const BondsBottomComponent = () => {

    const bombFinance = useBombFinance();
    const addTransaction = useTransactionAdder();
    const bondStat = useBondStats();
    const cashPrice = useCashPriceInLastTWAP();
    const bondsPurchasable = useBondsPurchasable();
    const bondBalance = useTokenBalance(bombFinance?.BBOND);

    const handleBuyBonds = useCallback(
        async (amount=1) => {
            const tx = await bombFinance.buyBonds(amount);
            addTransaction(tx, {
                summary: `Buy ${Number(amount).toFixed(2)} BBOND with ${amount} BOMB`,
            });
        },
        [bombFinance, addTransaction],
    );

    const handleRedeemBonds = useCallback(
        async (amount=1) => {
            const tx = await bombFinance.redeemBonds(amount);
            addTransaction(tx, { summary: `Redeem ${amount} BBOND` });
        },
        [bombFinance, addTransaction],
    );
    
    const isBondRedeemable = useMemo(() => cashPrice.gt(BOND_REDEEM_PRICE_BN), [cashPrice]);
    const isBondPurchasable = useMemo(() => Number(bondStat?.tokenInFtm) < 1.01, [bondStat]);
    const balanceBomb = useTokenBalance("BOMB");
    const balanceBbond = useTokenBalance("BBOND");

    const [onPresentPurchase, onDismissPurchase] = useModal(
        <ExchangeModal
            title={"Purchase"}
            description={!isBondPurchasable
                ? 'BOMB is over peg'
                : getDisplayBalance(bondsPurchasable, 18, 4) + ' BBOND available for purchase'}
            max={balanceBomb}
            onConfirm={(value) => {
                handleBuyBonds(value);
                onDismissPurchase();
            }}
            action={"Purchase"}
            tokenName={"BOMB"}
        />,
    );

    
    const [onPresentRedeem, onDismissRedeem] = useModal(
        <ExchangeModal
            title={"Redeem"}
            description={`${getDisplayBalance(bondBalance)} BBOND Available in wallet`}
            max={balanceBbond}
            onConfirm={(value) => {
                handleBuyBonds(value);
                onDismissRedeem();
            }}
            action={"Redeem"}
            tokenName={"BOMB"}
        />,
    );

    return (
        <div style={styles.container}>
            <div style={styles.heading}>
                <TokenSymbol size={40} symbol={'BBOND'} />
                <div style={styles.marginAdjustTitle}>
                    <p style={styles.Title}>Bonds</p>
                    <p style={styles.text}>BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1</p>
                </div>
            </div>

            <div style={styles.FlexContainerBot}>
                <div style={styles.CurrentPriceContainer}>
                    <p style={styles.text}>Current Price: (Bomb)^2</p>
                    <p style={styles.Title}>BBond = {Number(bondStat?.tokenInFtm).toFixed(4) || '-'} BTCB</p>
                </div>
                <div style={styles.RedeemContainer}>
                    <p style={styles.text}>Available to redeem:</p>
                    <div style={styles.RedeemSymbol}>
                        <TokenSymbol size={32} symbol={'BBOND'} />
                        <p style={styles.redeemText}>{!isBondPurchasable ? 'BOMB is over peg'
                            : getDisplayBalance(bondsPurchasable, 18, 4)}</p>
                    </div>
                </div>
                <div style={styles.BtnContainer}>
                    <div style={styles.EachBtn}>
                        <div>
                            <p>Purchase BBond</p>
                            <p style={{opacity: isBondPurchasable ? 0 : 1, marginBottom: isBondPurchasable ? -25 : 0}}>Bomb is over peg</p>
                        </div>
                        <div style={{opacity: (isBondPurchasable ? 1 : 0.5)}}>
                            <button style={styles.BtnStyle} onClick={() => isBondPurchasable ? onPresentPurchase() : console.log("Cannot purchase")}>
                                <p style={styles.BtnText}>Purchase</p>
                                <FontAwesomeIcon icon={faShoppingCart} style={{}} />
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div style={styles.EachBtn}>
                        <div>
                            <p>Purchase BBond</p>
                        </div>
                        <div style={{opacity: (isBondRedeemable ? 1 : 0.5)}}>
                            <button style={styles.BtnStyle} onClick={() => isBondRedeemable ? onPresentRedeem() : console.log("Not redeemed")}>
                                <p style={styles.BtnText}>Redeem</p>
                                <FontAwesomeIcon icon={faArrowDown} style={{}} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BondsBottomComponent;

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
    Title: {
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
    BtnContainer: {
        width: '43%',
    },
    RedeemSymbol: {
        display: 'flex',
    },
    redeemText: {
        fontSize: '35px',
        marginTop: '0px',
        marginLeft: '10px',
        // wrap text if too long
        width: '80%',
        wordWrap: 'break-word',

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
    },
};
