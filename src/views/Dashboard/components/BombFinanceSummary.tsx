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

const BombFinanceSummary = () => {


    const bombStats = useBombStats();
    console.log("bombStats", bombStats)
    const bondStats = useBondStats();
    console.log("bondStats", bondStats)
    const bshareStats = usebShareStats();
    console.log("bshareStats", bshareStats)

    const currentEpoch = useCurrentEpoch()
    console.log("currentEpoch", Number(currentEpoch))

    const { to } = useTreasuryAllocationTimes();
    console.log("to", to)

    const estimatedTWAP = useCashPriceInEstimatedTWAP()
    const estimatedTWAPPriceDollar = useMemo(() => (estimatedTWAP ? Number(estimatedTWAP.priceInDollars).toFixed(4) : null), [estimatedTWAP]);
    console.log("estimatedTWAPPriceDollar", estimatedTWAPPriceDollar)

    const TVL = useTotalValueLocked();
    console.log("TVL", TVL)
    const lastTWAP = useCashPriceInLastTWAP()
    console.log("lastTWAP", Number(lastTWAP))


    return (
        <div>
            <h1>Bomb Finance Summary</h1>
            <hr />
            <div>
                <div>
                    <div>
                        <p></p>
                        <p>Current Supply</p>
                        <p>Total Supply</p>
                        <p>Price</p>
                        <p></p>
                    </div>
                    <div>
                        <div>
                            <div>
                                {/* <TokenSymbol size={12} symbol={{}} /> */}
                                <p>$BOMB</p>
                            </div>
                            <p>8.66M</p>
                            <p>10.00M</p>
                            <div>
                                <p>$0.24</p>
                                <p>1.05 BTCB</p>
                            </div>
                            <div>
                                {/* <TokenSymbol size={12} symbol={{}} /> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                {/* <TokenSymbol size={12} symbol={{}} /> */}
                                <p>$BOMB</p>
                            </div>
                            <p>8.66M</p>
                            <p>10.00M</p>
                            <div>
                                <p>$0.24</p>
                                <p>1.05 BTCB</p>
                            </div>
                            <div>
                                {/* <TokenSymbol size={12} symbol={{}} /> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                {/* <TokenSymbol size={12} symbol={{}} /> */}
                                <p>$BOMB</p>
                            </div>
                            <p>8.66M</p>
                            <p>10.00M</p>
                            <div>
                                <p>$0.24</p>
                                <p>1.05 BTCB</p>
                            </div>
                            <div>
                                {/* <TokenSymbol size={12} symbol={{}} /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
                <div>
                    <div>
                        <p>Current Epoch</p>
                        <p>258</p>
                    </div>
                    <hr />
                    <div>
                        <ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" />
                        <p>Next Epoch in</p>
                    </div>
                    <hr />
                    <div>
                        <p>Live TWAP: 1.17</p>
                        <p>TVL: $123123</p>
                        <p>Last Epoch TWAP: 1.22</p>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default BombFinanceSummary