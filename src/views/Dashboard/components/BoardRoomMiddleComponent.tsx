import React, {useMemo} from 'react'
import TokenSymbol from '../../../components/TokenSymbol';
import useBombStats from '../../../hooks/useBombStats';
import useEarningsOnBoardroom from '../../../hooks/useEarningsOnBoardroom';
import {getDisplayBalance} from '../../../utils/formatBalance';
import useStakedBalanceOnBoardroom from '../../../hooks/useStakedBalanceOnBoardroom';
import useFetchBoardroomAPR from '../../../hooks/useFetchBoardroomAPR';
import useTotalStakedOnBoardroom from '../../../hooks/useTotalStakedOnBoardroom';

const BoardRoomMiddleComponent = () => {
    const bombStats = useBombStats();
    const tokenPriceInDollars = useMemo(() => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
        [bombStats],
    );
        
    const earnings = useEarningsOnBoardroom();
    console.log("earnings", Number(earnings))
    const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);
    console.log("earningsInDollars", earnedInDollars)
    const stakedBalance = useStakedBalanceOnBoardroom();
    console.log("stakedBalance", Number(stakedBalance))
    const stakedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(stakedBalance))).toFixed(2);
    console.log("stakedInDollars", stakedInDollars)
    const boardroomAPR = useFetchBoardroomAPR();
    console.log("boardroomAPR", boardroomAPR.toFixed(2))
    const totalStaked = useTotalStakedOnBoardroom();
    console.log("totalStaked", Number(totalStaked))
    
    


    return (
        <div>
            <div>
                <div>
                    <p>Read Investment Strategy</p>
                </div>
                <button>Invest Now</button>
                <div>
                    <button>
                        {/* <icon /> */}
                        <p>Chat on Discord</p>
                    </button>
                    <button>
                        {/* <icon /> */}
                        <p>Chat on Discord</p>
                    </button>
                </div>
                <div>
                    <div>
                        <div>
                            {/* <TokenSymbol size={32} symbol={{}} /> */}
                            <div>
                                <div>
                                    <p>BoardRoom</p>
                                    <p>Recommended</p>
                                </div>
                                <p>Stake BSHARE and earn BOMB every approach</p>
                            </div>
                        </div>
                        <div>
                            <p>TVL: $123123</p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div>
                            <p>Total Staked:</p>
                            {/* <TokenSymbol size={12} symbol={{}} /> */}
                            <p>123123</p>
                        </div>
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
                            <div>
                                <button>
                                    <p>Deposit</p>
                                    {/* <icon /> */}
                                </button>
                                <button>
                                    <p>Withdraw</p>
                                    {/* <icon /> */}
                                </button>
                            </div>
                            <button>
                                <p>Claim Rewards</p>
                                {/* <icon /> */}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <p>Latest News</p>
            </div>
        </div>




    )
}

export default BoardRoomMiddleComponent