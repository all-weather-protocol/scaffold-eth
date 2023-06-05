// 1. load suggestions.json
// 2. extract those categories whose investment_shift_of_this_category is greater than 5%
// 3. use Market Capitalization Weighting
// 5. get those positions which having the lowest APR in those categories
// 6. `symbol.split('-')`
// 7. calculate how many token you need to sell?
//     * for sell, just unstake your LP and then swap them to ETH
//     * for buying, use the investment shift to calculate how many token you need to buy for LP
// 8. populate those numbers to `zap in` page
const suggestions = {
    "net_worth": 171036.9300250404,
    "portfolio_apr": 32.05385687192646,
    "suggestions": [
      {
        "category": "long_term_bond",
        "investment_shift_of_this_category": 0.013961324281307877,
        "suggestions_for_positions": [
          {
            "apr": 0.209,
            "balanceUSD": 36151.89713121662,
            "difference": -1219.2645293849007,
            "symbol": "pendle:RETH-WETH"
          },
          {
            "apr": 0.18731825815254122,
            "balanceUSD": 11944.122127595167,
            "difference": -402.8293284847596,
            "symbol": "pendle:GLP"
          },
          {
            "apr": 0.38,
            "balanceUSD": 8077.36226050571,
            "difference": -272.4183812396078,
            "symbol": "sushiswap:KAVA-WETH"
          },
          {
            "apr": 0.7023957415855853,
            "balanceUSD": 3728.3129089428944,
            "difference": -125.74166351000923,
            "symbol": "radiant:RDNT-ETH"
          },
          {
            "apr": 0.12520108152601184,
            "balanceUSD": 2837.6679876980206,
            "difference": -95.70363378202029,
            "symbol": "convex-finance:WETH-CRV"
          },
          {
            "apr": 0.31,
            "balanceUSD": 2657.1844907699215,
            "difference": -89.61661917404378,
            "symbol": "SpaceFi:USDC-ETH"
          },
          {
            "apr": 0.19989623312357763,
            "balanceUSD": 2048.1287738494157,
            "difference": -69.07551093386128,
            "symbol": "sushiswap:DPX-WETH"
          },
          {
            "apr": 0.23,
            "balanceUSD": 1410.0666164361478,
            "difference": -47.556126950965385,
            "symbol": "quickswap-dex:WMATIC-WETH"
          },
          {
            "apr": 0.13,
            "balanceUSD": 906.3308291339637,
            "difference": -30.567055107513266,
            "symbol": "radiant:Radiant-ETH-lending-bnb"
          },
          {
            "apr": 0.13078928661867661,
            "balanceUSD": 695.4487915575571,
            "difference": -23.45481456953867,
            "symbol": "pendle:GDAI"
          }
        ],
        "sum_of_this_category_in_the_portfolio": 70802.67405417512,
        "target_sum_of_this_category": 68414.77201001617
      },
      {
        "category": "intermediate_term_bond",
        "investment_shift_of_this_category": 0.03483478795947292,
        "suggestions_for_positions": [
          {
            "apr": 0.18731825815254122,
            "balanceUSD": 10237.818966510142,
            "difference": -1929.4649930512353,
            "symbol": "pendle:GLP"
          },
          {
            "apr": 0.10240387906448878,
            "balanceUSD": 6824.876305105834,
            "difference": -1286.2466073763155,
            "symbol": "frax:VST-FRAX"
          },
          {
            "apr": 0.14163753361708276,
            "balanceUSD": 6548.881951713559,
            "difference": -1234.231481411285,
            "symbol": "yearn-finance:OHMFRAXBP-F"
          },
          {
            "apr": 0.0,
            "balanceUSD": 4108.459573104653,
            "difference": -774.2986028179245,
            "symbol": "frax:OHM-FRAX"
          },
          {
            "apr": 0.31,
            "balanceUSD": 2657.1844907699215,
            "difference": -500.78483237400945,
            "symbol": "SpaceFi:USDC-ETH"
          },
          {
            "apr": 0.13078928661867661,
            "balanceUSD": 1236.3534072134348,
            "difference": -233.00867363071845,
            "symbol": "pendle:GDAI"
          }
        ],
        "sum_of_this_category_in_the_portfolio": 31613.574694417548,
        "target_sum_of_this_category": 25655.53950375606
      },
      {
        "category": "commodities",
        "investment_shift_of_this_category": 0.0018598097483612539,
        "suggestions_for_positions": [
          {
            "apr": 0.7023957415855853,
            "balanceUSD": 5685.792808680667,
            "difference": -137.58156476534967,
            "symbol": "radiant:RDNT-BNB"
          },
          {
            "apr": 0.0956950165085102,
            "balanceUSD": 2645.51419136,
            "difference": -64.01464040345574,
            "symbol": "stfil:FIL"
          },
          {
            "apr": 0.12520108152601184,
            "balanceUSD": 1418.8339938490103,
            "difference": -34.332134072488806,
            "symbol": "convex-finance:WETH-CRV"
          },
          {
            "apr": 0.23,
            "balanceUSD": 1410.0666164361478,
            "difference": -34.11998608469924,
            "symbol": "quickswap-dex:WMATIC-WETH"
          },
          {
            "apr": 0.10105561948066555,
            "balanceUSD": 1250.5248563934852,
            "difference": -30.25948575859243,
            "symbol": "convex-finance:CVXCRV"
          },
          {
            "apr": 0.2,
            "balanceUSD": 612.7266729240698,
            "difference": -14.826409837807846,
            "symbol": "convex-finance:CVX"
          }
        ],
        "sum_of_this_category_in_the_portfolio": 13145.865901668381,
        "target_sum_of_this_category": 12827.76975187803
      },
      {
        "category": "gold",
        "investment_shift_of_this_category": -0.015142640744245761,
        "suggestions_for_positions": [
          {
            "apr": 0.18731825815254122,
            "balanceUSD": 10237.818966510142,
            "difference": 2589.950785367888,
            "symbol": "pendle:GLP"
          }
        ],
        "sum_of_this_category_in_the_portfolio": 10237.818966510142,
        "target_sum_of_this_category": 12827.76975187803
      },
      {
        "category": "large_cap_us_stocks",
        "investment_shift_of_this_category": 0.015900512575263436,
        "suggestions_for_positions": [
          {
            "apr": 0.7023957415855853,
            "balanceUSD": 14913.251635771578,
            "difference": -1210.4529082411211,
            "symbol": "radiant:RDNT-ETH"
          },
          {
            "apr": 0.18731825815254122,
            "balanceUSD": 10237.818966510142,
            "difference": -830.9655093818283,
            "symbol": "pendle:GLP"
          },
          {
            "apr": 0.7023957415855853,
            "balanceUSD": 5685.792808680667,
            "difference": -461.49455591667066,
            "symbol": "radiant:RDNT-BNB"
          },
          {
            "apr": 0.12520108152601184,
            "balanceUSD": 1418.8339938490103,
            "difference": -115.16145345837207,
            "symbol": "convex-finance:WETH-CRV"
          },
          {
            "apr": 0.10105561948066555,
            "balanceUSD": 1250.5248563934852,
            "difference": -101.50042969961521,
            "symbol": "convex-finance:CVXCRV"
          }
        ],
        "sum_of_this_category_in_the_portfolio": 33506.22226120488,
        "target_sum_of_this_category": 30786.647404507272
      },
      {
        "category": "small_cap_us_stocks",
        "investment_shift_of_this_category": -0.009355305757553648,
        "suggestions_for_positions": [
          {
            "apr": 0.19989623312357763,
            "balanceUSD": 2048.1287738494157,
            "difference": 928.1256813583212,
            "symbol": "sushiswap:DPX-WETH"
          },
          {
            "apr": 0.2,
            "balanceUSD": 612.7266729240698,
            "difference": 277.6619166016761,
            "symbol": "convex-finance:CVX"
          },
          {
            "apr": 10,
            "balanceUSD": 523.9975412904494,
            "difference": 237.45361192608303,
            "symbol": "Equilibria:PENDLE"
          }
        ],
        "sum_of_this_category_in_the_portfolio": 3531.005124533651,
        "target_sum_of_this_category": 5131.107900751212
      },
      {
        "category": "non_us_developed_market_stocks",
        "investment_shift_of_this_category": -0.012774162519619846,
        "suggestions_for_positions": [
          {
            "apr": 0.38,
            "balanceUSD": 8077.36226050571,
            "difference": 2184.8535409967135,
            "symbol": "sushiswap:KAVA-WETH"
          }
        ],
        "sum_of_this_category_in_the_portfolio": 8077.36226050571,
        "target_sum_of_this_category": 10262.215801502423
      },
      {
        "category": "non_us_emerging_market_stocks",
        "investment_shift_of_this_category": -0.02928432554298607,
        "suggestions_for_positions": [],
        "sum_of_this_category_in_the_portfolio": 122.406762025,
        "target_sum_of_this_category": 5131.107900751212
      }
    ],
    "top_n_pool_consist_of_same_lp_token": [
      [
        "pendle:GDAI",
        [
          {
            "pool_metadata": {
              "apy": 26.32877,
              "apyBase": 26.32877,
              "apyBase7d": null,
              "apyBaseInception": null,
              "apyMean30d": 20.03388,
              "apyPct1D": 7.39681,
              "apyPct30D": null,
              "apyPct7D": 7.24148,
              "apyReward": null,
              "chain": "Ethereum",
              "count": 24,
              "exposure": "single",
              "il7d": null,
              "ilRisk": "no",
              "mu": 19.95368,
              "outlier": false,
              "pool": "4419943a-dc35-470c-8210-a6f087e1fb70",
              "poolMeta": "Junior Tranche",
              "predictions": {
                "binnedConfidence": 2,
                "predictedClass": "Down",
                "predictedProbability": 73
              },
              "project": "idle",
              "rewardTokens": null,
              "sigma": 0.06925,
              "stablecoin": true,
              "symbol": "DAI",
              "tvlUsd": 2239552,
              "underlyingTokens": [
                "0x6B175474E89094C44Da98b954EedeAC495271d0F"
              ],
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          }
        ],
        0.13078928661867661
      ],
      [
        "pendle:GLP",
        [],
        0.18731825815254122
      ],
      [
        "radiant:RDNT-ETH",
        [],
        0.7023957415855853
      ],
      [
        "sushiswap:DPX-WETH",
        [
          {
            "pool_metadata": {
              "apy": 26.24373,
              "apyBase": 3.78758,
              "apyBase7d": 5.93198,
              "apyBaseInception": null,
              "apyMean30d": 33.24704,
              "apyPct1D": -3.82805,
              "apyPct30D": -21.59531,
              "apyPct7D": -5.40433,
              "apyReward": 22.45615,
              "chain": "Arbitrum",
              "count": 442,
              "exposure": "multi",
              "il7d": -0.18363,
              "ilRisk": "yes",
              "mu": 15.54133,
              "outlier": false,
              "pool": "168bac77-6fb7-47a3-a39f-25cf6752bad1",
              "poolMeta": null,
              "predictions": {
                "binnedConfidence": 3,
                "predictedClass": "Down",
                "predictedProbability": 86
              },
              "project": "sushiswap",
              "rewardTokens": [
                "0xd4d42F0b6DEF4CE0383636770eF773390d85c61A",
                "0x6c2c06790b3e3e3c38e12ee22f8183b37a13ee55"
              ],
              "sigma": 0.59072,
              "stablecoin": false,
              "symbol": "RDPX-WETH",
              "tvlUsd": 4859780,
              "underlyingTokens": [
                "0x32eb7902d4134bf98a28b963d26de779af92a212",
                "0x82af49447d8a07e3bd95bd0d56f35241523fbab1"
              ],
              "volumeUsd1d": 168098.56933,
              "volumeUsd7d": 1847954.93115
            },
            "pool_similarity": true
          }
        ],
        0.19989623312357763
      ],
      [
        "gamma:MAGIC-WETH",
        [],
        0.2822302480960981
      ],
      [
        "radiant:Radiant-ETH-lending-bnb",
        [
          {
            "pool_metadata": {
              "apy": 90.82504,
              "apyBase": null,
              "apyBase7d": null,
              "apyBaseInception": null,
              "apyMean30d": 164.38772,
              "apyPct1D": -5.71373,
              "apyPct30D": null,
              "apyPct7D": -39.24596,
              "apyReward": 90.82504,
              "chain": "Ethereum",
              "count": 14,
              "exposure": "single",
              "il7d": null,
              "ilRisk": "no",
              "mu": 149.1714,
              "outlier": true,
              "pool": "a7440518-4d50-4983-bf3e-dfd31ef296e3",
              "poolMeta": null,
              "predictions": {
                "binnedConfidence": 1,
                "predictedClass": "Stable/Up",
                "predictedProbability": 61
              },
              "project": "asymetrix-protocol",
              "rewardTokens": [
                "0x67d85A291fcDC862A78812a3C26d55e28FFB2701"
              ],
              "sigma": 1.49531,
              "stablecoin": false,
              "symbol": "STETH",
              "tvlUsd": 4230426,
              "underlyingTokens": [
                "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84"
              ],
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          },
          {
            "pool_metadata": {
              "apy": 58.5796,
              "apyBase": 58.5796,
              "apyBase7d": null,
              "apyBaseInception": -2.21616,
              "apyMean30d": 58.33473,
              "apyPct1D": 0,
              "apyPct30D": -4.40373,
              "apyPct7D": 3.44414,
              "apyReward": null,
              "chain": "Ethereum",
              "count": 206,
              "exposure": "single",
              "il7d": null,
              "ilRisk": "no",
              "mu": 21.44245,
              "outlier": false,
              "pool": "4f5f8c55-1237-4934-8a71-aacd40cd41ae",
              "poolMeta": "Covered-Call",
              "predictions": {
                "binnedConfidence": 3,
                "predictedClass": "Down",
                "predictedProbability": 97
              },
              "project": "ribbon",
              "rewardTokens": null,
              "sigma": 0.75364,
              "stablecoin": false,
              "symbol": "ETH",
              "tvlUsd": 7903263,
              "underlyingTokens": [
                "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
              ],
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          },
          {
            "pool_metadata": {
              "apy": 31.13118,
              "apyBase": 24.41496,
              "apyBase7d": 23.82759,
              "apyBaseInception": null,
              "apyMean30d": 45.37978,
              "apyPct1D": 8.1785,
              "apyPct30D": null,
              "apyPct7D": 0.55674,
              "apyReward": 6.71622,
              "chain": "Ethereum",
              "count": 21,
              "exposure": "multi",
              "il7d": null,
              "ilRisk": "no",
              "mu": 226.98655,
              "outlier": true,
              "pool": "64ac72ed-a1fd-4ec1-aa4b-8fbecb7faaae",
              "poolMeta": "RealYieldETH - 3day Bonding Lock",
              "predictions": {
                "binnedConfidence": 2,
                "predictedClass": "Down",
                "predictedProbability": 75
              },
              "project": "sommelier",
              "rewardTokens": [
                "0xa670d7237398238de01267472c6f13e5b8010fd1"
              ],
              "sigma": 11.2481,
              "stablecoin": false,
              "symbol": "WETH-STETH-CBETH-RETH",
              "tvlUsd": 3936745,
              "underlyingTokens": [
                "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                "0xae78736Cd615f374D3085123A210448E74Fc6393",
                "0xBe9895146f7AF43049ca1c1AE358B0541Ea49704",
                "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
                "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84"
              ],
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          },
          {
            "pool_metadata": {
              "apy": 27.48349,
              "apyBase": 27.48349,
              "apyBase7d": null,
              "apyBaseInception": -0.25154,
              "apyMean30d": 29.09525,
              "apyPct1D": 0,
              "apyPct30D": -11.59649,
              "apyPct7D": 3.56801,
              "apyReward": null,
              "chain": "Ethereum",
              "count": 189,
              "exposure": "single",
              "il7d": null,
              "ilRisk": "no",
              "mu": 14.50787,
              "outlier": false,
              "pool": "7e5cf37d-6537-4a3e-883b-f1f3d88c87c2",
              "poolMeta": "Covered-Call",
              "predictions": {
                "binnedConfidence": 3,
                "predictedClass": "Down",
                "predictedProbability": 88
              },
              "project": "ribbon",
              "rewardTokens": null,
              "sigma": 0.42337,
              "stablecoin": false,
              "symbol": "STETH",
              "tvlUsd": 8498784,
              "underlyingTokens": [
                "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
              ],
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          },
          {
            "pool_metadata": {
              "apy": 49.38473,
              "apyBase": 49.38473,
              "apyBase7d": 0,
              "apyBaseInception": null,
              "apyMean30d": 49.21751,
              "apyPct1D": null,
              "apyPct30D": null,
              "apyPct7D": null,
              "apyReward": null,
              "chain": "Ethereum",
              "count": 1,
              "exposure": "multi",
              "il7d": null,
              "ilRisk": "no",
              "mu": 49.38473,
              "outlier": true,
              "pool": "bb63c58a-47dd-4bb2-bb0f-36dd2a9beabf",
              "poolMeta": "0.3%",
              "predictions": {
                "binnedConfidence": null,
                "predictedClass": null,
                "predictedProbability": null
              },
              "project": "uniswap-v3",
              "rewardTokens": null,
              "sigma": 0,
              "stablecoin": false,
              "symbol": "DETH-WETH",
              "tvlUsd": 2153390,
              "underlyingTokens": [
                "0x28e318b2063ed3945f86f1ef13bdeb29923c9f02",
                "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
              ],
              "volumeUsd1d": 971183.54936,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          }
        ],
        0.13
      ],
      [
        "sushiswap:KAVA-WETH",
        [],
        0.38
      ],
      [
        "convex-finance:WETH-CRV",
        [
          {
            "pool_metadata": {
              "apy": 26.94576,
              "apyBase": 0.04892,
              "apyBase7d": null,
              "apyBaseInception": null,
              "apyMean30d": 17.80086,
              "apyPct1D": -0.70793,
              "apyPct30D": null,
              "apyPct7D": 2.62505,
              "apyReward": 26.89685,
              "chain": "Ethereum",
              "count": 20,
              "exposure": "multi",
              "il7d": null,
              "ilRisk": "yes",
              "mu": 17.41113,
              "outlier": false,
              "pool": "b8c90f85-fcf5-4bcf-af8a-e361209dff0d",
              "poolMeta": null,
              "predictions": {
                "binnedConfidence": 3,
                "predictedClass": "Down",
                "predictedProbability": 83
              },
              "project": "convex-finance",
              "rewardTokens": [
                "0xd533a949740bb3306d119cc777fa900ba034cd52",
                "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b"
              ],
              "sigma": 0.52156,
              "stablecoin": false,
              "symbol": "CRV-FRXETH",
              "tvlUsd": 984107,
              "underlyingTokens": [
                "0xD533a949740bb3306d119CC777fa900bA034cd52",
                "0x5E8422345238F34275888049021821E8E08CAa1f"
              ],
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          },
          {
            "pool_metadata": {
              "apy": 16.47,
              "apyBase": null,
              "apyBase7d": null,
              "apyBaseInception": null,
              "apyMean30d": 16.80691,
              "apyPct1D": 0,
              "apyPct30D": -3.36,
              "apyPct7D": 0,
              "apyReward": null,
              "chain": "Ethereum",
              "count": 353,
              "exposure": "multi",
              "il7d": null,
              "ilRisk": "yes",
              "mu": 30.73547,
              "outlier": false,
              "pool": "1e13c46e-d42f-43e8-bda2-8ca344b5ce1c",
              "poolMeta": null,
              "predictions": {
                "binnedConfidence": 1,
                "predictedClass": "Stable/Up",
                "predictedProbability": 62
              },
              "project": "concentrator",
              "rewardTokens": null,
              "sigma": 0.65297,
              "stablecoin": false,
              "symbol": "ETH-CRV",
              "tvlUsd": 723845,
              "underlyingTokens": null,
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          }
        ],
        0.12520108152601184
      ],
      [
        "SpaceFi:USDC-ETH",
        [
          {
            "pool_metadata": {
              "apy": 106.22542,
              "apyBase": 12.03359,
              "apyBase7d": null,
              "apyBaseInception": null,
              "apyMean30d": 151.60374,
              "apyPct1D": -8.6539,
              "apyPct30D": null,
              "apyPct7D": -42.27069,
              "apyReward": 94.19183,
              "chain": "Arbitrum",
              "count": 11,
              "exposure": "multi",
              "il7d": null,
              "ilRisk": "yes",
              "mu": 147.39137,
              "outlier": true,
              "pool": "ec999890-8f09-4a68-9188-ddd5cef36a45",
              "poolMeta": "LionDEX LP pool",
              "predictions": {
                "binnedConfidence": 1,
                "predictedClass": "Down",
                "predictedProbability": 50
              },
              "project": "liondex",
              "rewardTokens": [
                "0x8ebb85d53e6955e557b7c53acde1d42fd68561ec"
              ],
              "sigma": 0.53346,
              "stablecoin": false,
              "symbol": "WBTC-ETH-USDC",
              "tvlUsd": 1867832,
              "underlyingTokens": [
                "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
                "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
                "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8"
              ],
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          },
          {
            "pool_metadata": {
              "apy": 62.98012,
              "apyBase": 62.98012,
              "apyBase7d": null,
              "apyBaseInception": null,
              "apyMean30d": 203.18412,
              "apyPct1D": 27.46935,
              "apyPct30D": -2815.04093,
              "apyPct7D": 3.91699,
              "apyReward": null,
              "chain": "Optimism",
              "count": 51,
              "exposure": "multi",
              "il7d": null,
              "ilRisk": "yes",
              "mu": 432.01812,
              "outlier": true,
              "pool": "66f4b92f-ca33-4813-8a70-64405e151aae",
              "poolMeta": "0.05%",
              "predictions": {
                "binnedConfidence": 1,
                "predictedClass": "Down",
                "predictedProbability": 53
              },
              "project": "gamma",
              "rewardTokens": null,
              "sigma": 7.98894,
              "stablecoin": false,
              "symbol": "WETH-USDC",
              "tvlUsd": 967384,
              "underlyingTokens": [
                "0x4200000000000000000000000000000000000006",
                "0x7f5c764cbc14f9669b88837ca1490cca17c31607"
              ],
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          }
        ],
        0.31
      ],
      [
        "pendle:RETH-WETH",
        [
          {
            "pool_metadata": {
              "apy": 90.82504,
              "apyBase": null,
              "apyBase7d": null,
              "apyBaseInception": null,
              "apyMean30d": 164.38772,
              "apyPct1D": -5.71373,
              "apyPct30D": null,
              "apyPct7D": -39.24596,
              "apyReward": 90.82504,
              "chain": "Ethereum",
              "count": 14,
              "exposure": "single",
              "il7d": null,
              "ilRisk": "no",
              "mu": 149.1714,
              "outlier": true,
              "pool": "a7440518-4d50-4983-bf3e-dfd31ef296e3",
              "poolMeta": null,
              "predictions": {
                "binnedConfidence": 1,
                "predictedClass": "Stable/Up",
                "predictedProbability": 61
              },
              "project": "asymetrix-protocol",
              "rewardTokens": [
                "0x67d85A291fcDC862A78812a3C26d55e28FFB2701"
              ],
              "sigma": 1.49531,
              "stablecoin": false,
              "symbol": "STETH",
              "tvlUsd": 4230426,
              "underlyingTokens": [
                "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84"
              ],
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          },
          {
            "pool_metadata": {
              "apy": 58.5796,
              "apyBase": 58.5796,
              "apyBase7d": null,
              "apyBaseInception": -2.21616,
              "apyMean30d": 58.33473,
              "apyPct1D": 0,
              "apyPct30D": -4.40373,
              "apyPct7D": 3.44414,
              "apyReward": null,
              "chain": "Ethereum",
              "count": 206,
              "exposure": "single",
              "il7d": null,
              "ilRisk": "no",
              "mu": 21.44245,
              "outlier": false,
              "pool": "4f5f8c55-1237-4934-8a71-aacd40cd41ae",
              "poolMeta": "Covered-Call",
              "predictions": {
                "binnedConfidence": 3,
                "predictedClass": "Down",
                "predictedProbability": 97
              },
              "project": "ribbon",
              "rewardTokens": null,
              "sigma": 0.75364,
              "stablecoin": false,
              "symbol": "ETH",
              "tvlUsd": 7903263,
              "underlyingTokens": [
                "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
              ],
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          },
          {
            "pool_metadata": {
              "apy": 31.13118,
              "apyBase": 24.41496,
              "apyBase7d": 23.82759,
              "apyBaseInception": null,
              "apyMean30d": 45.37978,
              "apyPct1D": 8.1785,
              "apyPct30D": null,
              "apyPct7D": 0.55674,
              "apyReward": 6.71622,
              "chain": "Ethereum",
              "count": 21,
              "exposure": "multi",
              "il7d": null,
              "ilRisk": "no",
              "mu": 226.98655,
              "outlier": true,
              "pool": "64ac72ed-a1fd-4ec1-aa4b-8fbecb7faaae",
              "poolMeta": "RealYieldETH - 3day Bonding Lock",
              "predictions": {
                "binnedConfidence": 2,
                "predictedClass": "Down",
                "predictedProbability": 75
              },
              "project": "sommelier",
              "rewardTokens": [
                "0xa670d7237398238de01267472c6f13e5b8010fd1"
              ],
              "sigma": 11.2481,
              "stablecoin": false,
              "symbol": "WETH-STETH-CBETH-RETH",
              "tvlUsd": 3936745,
              "underlyingTokens": [
                "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                "0xae78736Cd615f374D3085123A210448E74Fc6393",
                "0xBe9895146f7AF43049ca1c1AE358B0541Ea49704",
                "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
                "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84"
              ],
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          },
          {
            "pool_metadata": {
              "apy": 27.48349,
              "apyBase": 27.48349,
              "apyBase7d": null,
              "apyBaseInception": -0.25154,
              "apyMean30d": 29.09525,
              "apyPct1D": 0,
              "apyPct30D": -11.59649,
              "apyPct7D": 3.56801,
              "apyReward": null,
              "chain": "Ethereum",
              "count": 189,
              "exposure": "single",
              "il7d": null,
              "ilRisk": "no",
              "mu": 14.50787,
              "outlier": false,
              "pool": "7e5cf37d-6537-4a3e-883b-f1f3d88c87c2",
              "poolMeta": "Covered-Call",
              "predictions": {
                "binnedConfidence": 3,
                "predictedClass": "Down",
                "predictedProbability": 88
              },
              "project": "ribbon",
              "rewardTokens": null,
              "sigma": 0.42337,
              "stablecoin": false,
              "symbol": "STETH",
              "tvlUsd": 8498784,
              "underlyingTokens": [
                "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
              ],
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          },
          {
            "pool_metadata": {
              "apy": 49.38473,
              "apyBase": 49.38473,
              "apyBase7d": 0,
              "apyBaseInception": null,
              "apyMean30d": 49.21751,
              "apyPct1D": null,
              "apyPct30D": null,
              "apyPct7D": null,
              "apyReward": null,
              "chain": "Ethereum",
              "count": 1,
              "exposure": "multi",
              "il7d": null,
              "ilRisk": "no",
              "mu": 49.38473,
              "outlier": true,
              "pool": "bb63c58a-47dd-4bb2-bb0f-36dd2a9beabf",
              "poolMeta": "0.3%",
              "predictions": {
                "binnedConfidence": null,
                "predictedClass": null,
                "predictedProbability": null
              },
              "project": "uniswap-v3",
              "rewardTokens": null,
              "sigma": 0,
              "stablecoin": false,
              "symbol": "DETH-WETH",
              "tvlUsd": 2153390,
              "underlyingTokens": [
                "0x28e318b2063ed3945f86f1ef13bdeb29923c9f02",
                "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
              ],
              "volumeUsd1d": 971183.54936,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          }
        ],
        0.209
      ],
      [
        "quickswap-dex:WMATIC-WETH",
        [],
        0.23
      ],
      [
        "frax:VST-FRAX",
        [],
        0.10240387906448878
      ],
      [
        "yearn-finance:OHMFRAXBP-F",
        [],
        0.14163753361708276
      ],
      [
        "frax:OHM-FRAX",
        [],
        0.0
      ],
      [
        "radiant:RDNT-BNB",
        [],
        0.7023957415855853
      ],
      [
        "convex-finance:CVX",
        [
          {
            "pool_metadata": {
              "apy": 34.90727,
              "apyBase": 0.04315,
              "apyBase7d": null,
              "apyBaseInception": null,
              "apyMean30d": 34.4178,
              "apyPct1D": -0.39229,
              "apyPct30D": 1.35007,
              "apyPct7D": 3.76696,
              "apyReward": 34.86412,
              "chain": "Ethereum",
              "count": 39,
              "exposure": "multi",
              "il7d": null,
              "ilRisk": "yes",
              "mu": 34.43226,
              "outlier": false,
              "pool": "2f73ca67-3484-4aa3-8a26-48718a3b8bd7",
              "poolMeta": null,
              "predictions": {
                "binnedConfidence": 1,
                "predictedClass": "Down",
                "predictedProbability": 52
              },
              "project": "convex-finance",
              "rewardTokens": [
                "0xd533a949740bb3306d119cc777fa900ba034cd52",
                "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b"
              ],
              "sigma": 0.10663,
              "stablecoin": false,
              "symbol": "CVX-CLEVCVX",
              "tvlUsd": 2083363,
              "underlyingTokens": [
                "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B",
                "0xf05e58fCeA29ab4dA01A495140B349F8410Ba904"
              ],
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          },
          {
            "pool_metadata": {
              "apy": 24.81089,
              "apyBase": 24.81089,
              "apyBase7d": null,
              "apyBaseInception": null,
              "apyMean30d": 25.15763,
              "apyPct1D": 0,
              "apyPct30D": -1.88437,
              "apyPct7D": 0.34098,
              "apyReward": 0,
              "chain": "Ethereum",
              "count": 411,
              "exposure": "single",
              "il7d": null,
              "ilRisk": "no",
              "mu": 30.12188,
              "outlier": false,
              "pool": "36d07713-d5de-42d8-9b34-5c71e788a77e",
              "poolMeta": null,
              "predictions": {
                "binnedConfidence": 1,
                "predictedClass": "Stable/Up",
                "predictedProbability": 61
              },
              "project": "badger-dao",
              "rewardTokens": [],
              "sigma": 0.38707,
              "stablecoin": false,
              "symbol": "BVECVX",
              "tvlUsd": 9379529,
              "underlyingTokens": [
                "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B"
              ],
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          }
        ],
        0.2
      ],
      [
        "convex-finance:CVXCRV",
        [
          {
            "pool_metadata": {
              "apy": 29.09,
              "apyBase": null,
              "apyBase7d": null,
              "apyBaseInception": null,
              "apyMean30d": 29.50945,
              "apyPct1D": 0,
              "apyPct30D": -0.01,
              "apyPct7D": 0,
              "apyReward": null,
              "chain": "Ethereum",
              "count": 50,
              "exposure": "multi",
              "il7d": null,
              "ilRisk": "yes",
              "mu": 37.64505,
              "outlier": true,
              "pool": "8d7633d8-be8c-4b65-ba87-76bc808c9aed",
              "poolMeta": null,
              "predictions": {
                "binnedConfidence": 3,
                "predictedClass": "Down",
                "predictedProbability": 81
              },
              "project": "concentrator",
              "rewardTokens": null,
              "sigma": 0.7257,
              "stablecoin": false,
              "symbol": "CRV-CVXCRV",
              "tvlUsd": 2310549,
              "underlyingTokens": null,
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          },
          {
            "pool_metadata": {
              "apy": 26.86028,
              "apyBase": 0.38242,
              "apyBase7d": null,
              "apyBaseInception": null,
              "apyMean30d": 25.01571,
              "apyPct1D": -0.26723,
              "apyPct30D": 0.80206,
              "apyPct7D": 1.23645,
              "apyReward": 26.47785,
              "chain": "Ethereum",
              "count": 39,
              "exposure": "multi",
              "il7d": null,
              "ilRisk": "yes",
              "mu": 25.10471,
              "outlier": false,
              "pool": "3f6f3937-1f0c-4cec-8d3b-904434085bfa",
              "poolMeta": null,
              "predictions": {
                "binnedConfidence": 2,
                "predictedClass": "Down",
                "predictedProbability": 68
              },
              "project": "convex-finance",
              "rewardTokens": [
                "0xd533a949740bb3306d119cc777fa900ba034cd52",
                "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b"
              ],
              "sigma": 0.05955,
              "stablecoin": false,
              "symbol": "CRV-CVXCRV",
              "tvlUsd": 43986696,
              "underlyingTokens": [
                "0xD533a949740bb3306d119CC777fa900bA034cd52",
                "0x62B9c7356A2Dc64a1969e19C23e4f579F9810Aa7"
              ],
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          },
          {
            "pool_metadata": {
              "apy": 22.15083,
              "apyBase": 1.97211,
              "apyBase7d": null,
              "apyBaseInception": null,
              "apyMean30d": 24.73639,
              "apyPct1D": 1.51957,
              "apyPct30D": -2.29483,
              "apyPct7D": -2.04126,
              "apyReward": 20.17872,
              "chain": "Ethereum",
              "count": 115,
              "exposure": "multi",
              "il7d": null,
              "ilRisk": "yes",
              "mu": 28.66504,
              "outlier": false,
              "pool": "1fbe7e03-75f3-4d65-8423-2cc023f786d7",
              "poolMeta": null,
              "predictions": {
                "binnedConfidence": 2,
                "predictedClass": "Stable/Up",
                "predictedProbability": 67
              },
              "project": "convex-finance",
              "rewardTokens": [
                "0xd533a949740bb3306d119cc777fa900ba034cd52",
                "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b"
              ],
              "sigma": 0.19122,
              "stablecoin": false,
              "symbol": "CRV-YCRV",
              "tvlUsd": 7077506,
              "underlyingTokens": [
                "0xD533a949740bb3306d119CC777fa900bA034cd52",
                "0xFCc5c47bE19d06BF83eB04298b026F81069ff65b"
              ],
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          },
          {
            "pool_metadata": {
              "apy": 20.06961,
              "apyBase": 19.27873,
              "apyBase7d": null,
              "apyBaseInception": null,
              "apyMean30d": 18.64487,
              "apyPct1D": 0.15504,
              "apyPct30D": -1.84112,
              "apyPct7D": 0.72937,
              "apyReward": 0.79087,
              "chain": "Ethereum",
              "count": 136,
              "exposure": "single",
              "il7d": null,
              "ilRisk": "no",
              "mu": 20.9553,
              "outlier": false,
              "pool": "009b310f-8777-4d5d-a894-548b3218d18c",
              "poolMeta": "Curve",
              "predictions": {
                "binnedConfidence": 2,
                "predictedClass": "Down",
                "predictedProbability": 69
              },
              "project": "stakedao",
              "rewardTokens": [
                "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
                "0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f"
              ],
              "sigma": 0.16199,
              "stablecoin": false,
              "symbol": "CRV",
              "tvlUsd": 23416451,
              "underlyingTokens": [
                "0xD1b5651E55D4CeeD36251c61c50C889B36F6abB5"
              ],
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          },
          {
            "pool_metadata": {
              "apy": 20.75052,
              "apyBase": 0.81935,
              "apyBase7d": null,
              "apyBaseInception": null,
              "apyMean30d": 16.33176,
              "apyPct1D": 0.21804,
              "apyPct30D": 9.60935,
              "apyPct7D": 3.14271,
              "apyReward": 19.93118,
              "chain": "Ethereum",
              "count": 214,
              "exposure": "multi",
              "il7d": null,
              "ilRisk": "yes",
              "mu": 26.41993,
              "outlier": false,
              "pool": "1ec3feee-b2a9-454f-9dd3-f54ecde0f2b1",
              "poolMeta": null,
              "predictions": {
                "binnedConfidence": 2,
                "predictedClass": "Down",
                "predictedProbability": 74
              },
              "project": "convex-finance",
              "rewardTokens": [
                "0xd533a949740bb3306d119cc777fa900ba034cd52",
                "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b"
              ],
              "sigma": 1.25015,
              "stablecoin": false,
              "symbol": "CRV-SDCRV",
              "tvlUsd": 1135887,
              "underlyingTokens": [
                "0xD533a949740bb3306d119CC777fa900bA034cd52",
                "0xD1b5651E55D4CeeD36251c61c50C889B36F6abB5"
              ],
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          }
        ],
        0.10105561948066555
      ],
      [
        "stfil:FIL",
        [
          {
            "pool_metadata": {
              "apy": 20,
              "apyBase": null,
              "apyBase7d": null,
              "apyBaseInception": null,
              "apyMean30d": 20,
              "apyPct1D": 0,
              "apyPct30D": null,
              "apyPct7D": null,
              "apyReward": null,
              "chain": "Filecoin",
              "count": 2,
              "exposure": "single",
              "il7d": null,
              "ilRisk": "no",
              "mu": 20,
              "outlier": false,
              "pool": "461800a1-f60b-4dd8-8914-e3e8b78a43dd",
              "poolMeta": "360days lockup",
              "predictions": {
                "binnedConfidence": null,
                "predictedClass": null,
                "predictedProbability": null
              },
              "project": "filet-finance",
              "rewardTokens": null,
              "sigma": 0,
              "stablecoin": false,
              "symbol": "FIL",
              "tvlUsd": 2326216,
              "underlyingTokens": null,
              "volumeUsd1d": null,
              "volumeUsd7d": null
            },
            "pool_similarity": true
          }
        ],
        0.0956950165085102
      ],
      [
        "cosmos:atom-stake",
        [],
        0.2
      ],
      [
        "Equilibria:PENDLE",
        [],
        10
      ]
    ],
    "topn_stable_coins": [
      {
        "apy": 37.52975,
        "apyBase": null,
        "apyBase7d": null,
        "apyBaseInception": null,
        "apyMean30d": 40.47891,
        "apyPct1D": 12.30721,
        "apyPct30D": null,
        "apyPct7D": -7.62699,
        "apyReward": 37.52975,
        "chain": "Arbitrum",
        "count": 9,
        "exposure": "multi",
        "il7d": -2e-05,
        "ilRisk": "no",
        "mu": 28.39446,
        "outlier": false,
        "pool": "a8ffb4ac-47ce-4f23-abee-c88832574c6d",
        "poolMeta": null,
        "predictions": {
          "binnedConfidence": 3,
          "predictedClass": "Down",
          "predictedProbability": 79
        },
        "project": "auragi-finance",
        "rewardTokens": [
          "0xFF191514A9baba76BfD19e3943a4d37E8ec9a111"
        ],
        "sigma": 0.41028,
        "stablecoin": true,
        "symbol": "USDT-USDC",
        "tvlUsd": 189245,
        "underlyingTokens": [
          "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
          "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8"
        ],
        "volumeUsd1d": null,
        "volumeUsd7d": null
      },
      {
        "apy": 30.41411,
        "apyBase": 30.41411,
        "apyBase7d": 17.54219,
        "apyBaseInception": null,
        "apyMean30d": 18.44764,
        "apyPct1D": 18.16272,
        "apyPct30D": 7.32484,
        "apyPct7D": -33.516,
        "apyReward": null,
        "chain": "Arbitrum",
        "count": 41,
        "exposure": "multi",
        "il7d": -1.97972,
        "ilRisk": "no",
        "mu": 18.73891,
        "outlier": false,
        "pool": "56d27660-9d86-4c85-8594-de65cae6328e",
        "poolMeta": "0.05%",
        "predictions": {
          "binnedConfidence": 3,
          "predictedClass": "Down",
          "predictedProbability": 79
        },
        "project": "uniswap-v3",
        "rewardTokens": null,
        "sigma": 0.49354,
        "stablecoin": true,
        "symbol": "LUSD-USDC",
        "tvlUsd": 166725,
        "underlyingTokens": [
          "0x93b346b6bc2548da6a1e7d98e9a421b42541425b",
          "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8"
        ],
        "volumeUsd1d": 277852.50003,
        "volumeUsd7d": 1124896.21386
      },
      {
        "apy": 24.05585,
        "apyBase": null,
        "apyBase7d": null,
        "apyBaseInception": null,
        "apyMean30d": 28.55591,
        "apyPct1D": -1.6319,
        "apyPct30D": null,
        "apyPct7D": -7.36974,
        "apyReward": 24.05585,
        "chain": "Arbitrum",
        "count": 28,
        "exposure": "single",
        "il7d": null,
        "ilRisk": "no",
        "mu": 26.48584,
        "outlier": false,
        "pool": "d969a2ef-0baf-4fb0-8b4c-62ed3e53a10e",
        "poolMeta": "LP Pool",
        "predictions": {
          "binnedConfidence": 2,
          "predictedClass": "Stable/Up",
          "predictedProbability": 63
        },
        "project": "wombex-finance",
        "rewardTokens": [
          "0x5190f06eacefa2c552dc6bd5e763b81c73293293",
          "0x7B5EB3940021Ec0e8e463D5dBB4B7B09a89DDF96"
        ],
        "sigma": 0.28199,
        "stablecoin": true,
        "symbol": "FRAX",
        "tvlUsd": 326929,
        "underlyingTokens": [
          "0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F"
        ],
        "volumeUsd1d": null,
        "volumeUsd7d": null
      },
      {
        "apy": 22.64582,
        "apyBase": null,
        "apyBase7d": null,
        "apyBaseInception": null,
        "apyMean30d": 23.85028,
        "apyPct1D": -6.2209,
        "apyPct30D": null,
        "apyPct7D": -14.10379,
        "apyReward": 22.64582,
        "chain": "Arbitrum",
        "count": 23,
        "exposure": "single",
        "il7d": null,
        "ilRisk": "no",
        "mu": 23.69381,
        "outlier": false,
        "pool": "c68be762-6fe1-4b7e-80fb-33277f8e74ab",
        "poolMeta": "Wombat",
        "predictions": {
          "binnedConfidence": 1,
          "predictedClass": "Stable/Up",
          "predictedProbability": 60
        },
        "project": "magpie",
        "rewardTokens": [
          "0xa61F74247455A40b01b0559ff6274441FAfa22A3",
          "0x7B5EB3940021Ec0e8e463D5dBB4B7B09a89DDF96"
        ],
        "sigma": 0.23857,
        "stablecoin": true,
        "symbol": "FRAX",
        "tvlUsd": 164014,
        "underlyingTokens": [
          "0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F"
        ],
        "volumeUsd1d": null,
        "volumeUsd7d": null
      },
      {
        "apy": 22.6431,
        "apyBase": 22.6431,
        "apyBase7d": null,
        "apyBaseInception": null,
        "apyMean30d": 19.71779,
        "apyPct1D": 10.40948,
        "apyPct30D": null,
        "apyPct7D": null,
        "apyReward": null,
        "chain": "BSC",
        "count": 2,
        "exposure": "multi",
        "il7d": -2e-05,
        "ilRisk": "no",
        "mu": 17.09635,
        "outlier": false,
        "pool": "b0a571e5-4297-4bc1-9f86-f67778c6cd4a",
        "poolMeta": "0.05%",
        "predictions": {
          "binnedConfidence": null,
          "predictedClass": null,
          "predictedProbability": null
        },
        "project": "pancakeswap-amm-v3",
        "rewardTokens": null,
        "sigma": 0.34274,
        "stablecoin": true,
        "symbol": "DAI-USDC",
        "tvlUsd": 100082,
        "underlyingTokens": [
          "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
          "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"
        ],
        "volumeUsd1d": 124174.07607,
        "volumeUsd7d": null
      }
    ],
    "total_interest": 54823.93274836347
  }
  
  
const REBALANCETHRESHOLD = 0.03
const DELTA = 0.005
const categoriesNeedToBeRebalanced = suggestions.suggestions.filter(category => category.investment_shift_of_this_category > REBALANCETHRESHOLD | category.investment_shift_of_this_category < -REBALANCETHRESHOLD)
const a = categoriesNeedToBeRebalanced.map(category => {
    const amountOfUsdNeedToBeRebalanced = (category.investment_shift_of_this_category > 0) ? suggestions.net_worth * (category.investment_shift_of_this_category - REBALANCETHRESHOLD - DELTA) : suggestions.net_worth * (-REBALANCETHRESHOLD + DELTA - category.investment_shift_of_this_category);
    const sortedPositions = category.suggestions_for_positions.slice().sort((a, b) => a.apr - b.apr); // Sort positions by APR in ascending order

    for (const position of sortedPositions) {
        if (amountOfUsdNeedToBeRebalanced > 0) {
            const amountOfUsdNeedToBeRebalancedInThisPosition = Math.min(amountOfUsdNeedToBeRebalanced, position.usd_amount);
            position.usd_amount -= amountOfUsdNeedToBeRebalancedInThisPosition;
            amountOfUsdNeedToBeRebalanced -= amountOfUsdNeedToBeRebalancedInThisPosition;
        }
        
    }
    console.log(sortedPositions)
    // Continue with your logic or operations using the 'amountOfUsdNeedToBeRebalanced' and 'sortedPositions' variables
    // ...
});

// import axios from "axios";
// import { usePoller } from "eth-hooks";
// import { useState } from "react";
// const API_URL = process.env.REACT_APP_API_URL;
// export default function useRebalanceSuggestions(addresses, pollTime = 300000) {
//   const [rebalanceSuggestions, setRebalanceSuggestions] = useState([]);
//   const [totalInterest, setTotalInterest] = useState(0);
//   const [portfolioApr, setPortfolioApr] = useState(0);
//   const [sharpeRatio, setSharpeRatio] = useState(0);
//   const [topNPoolConsistOfSameLpToken, setTopNPoolConsistOfSameLpToken] = useState([]);
//   const [topNStableCoins, setTopNStableCoins] = useState([]);
//   const loadSuggestions = async () => {
//     axios
//       .get(`https://aggregator-api.kyberswap.com/{chain}/api/v2/routes?tokenIn=${tokenIn}&tokenOut=${tokenOut}&amountIn=${amountIn}`)
//       .then(response => {
//       })
//       .catch(error => console.log(error));
//   };

//   usePoller(loadSuggestions, pollTime);
//   return {
//     rebalanceSuggestions,
//     totalInterest,
//     portfolioApr,
//     sharpeRatio,
//     topNPoolConsistOfSameLpToken,
//     topNStableCoins,
//   };
// }
