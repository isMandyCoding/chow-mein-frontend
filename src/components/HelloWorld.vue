<template>
    <v-content>
      <section>
        <v-parallax src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFxgaGRcYGCAaFxgbGBgYHRoYGh4dHSggGBolGxoYITEhJSorLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy8mICUvLS01LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABMEAABAwEFBAYGBQoEBAcBAAABAgMRAAQSITFBBVFhcQYTIoGRoQcyQrHB8BRSYnLRIzNDU4KSssLS4RWi4vFEY5PTFiQ0VHOj4yX/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQMCBAUG/8QAKxEAAgIBAwQBAwQDAQAAAAAAAAECEQMSITEEIkFR8BNhgTJxkbEj0fGh/9oADAMBAAIRAxEAPwCpm1qI7BUo/Zxw4nflSlksV1PaUpOMgJN6M8NZNP2r12AlIByhKhgeWdF6nPFKe7HkL01UwcQ+mICVq4qIE8c/hRXGArHqx5fJo46tJxUCftH37t9IqfSSB1qJPGcuCQaQ7CGxA+x7vdXE2WMkecfCl5OkK3Htf0ijQT7JMY+sQB/l40WAyXZjld864bPgJGsd+7DWnK1KIwTnreP40mplwgY4A4YqgEg8c4JosBu6xGCQb0TrkZiTplRCnDGfhHITSjzIGKnE4z7WMgTqaIEIGap4Z0WFBL7YwJJ+eNJrebnBR8py91OVXd0d0e8Uts9lhwqSt4NqMXCoC4eCiMUzhByzpSlpVsErdIjVPN6FZOGhPPIUtZ7QkQoBy8DIwMCDhnxp3tTZy7OoJdQUzMHNKgBmk5GmhtCdBlwPxoTTVpg01szek2pNoabtCfVdQFRuOqTxBkHlXbMogwRniT84qPDICazLoB02Qws2V+RZ3DKVnJpfHchWp0OOpNaq9ZJEYEEYHQg8jiN41rkz4294lscq5HKTMa8RjzBI79KJfGQjE5QcROJiOPupIOkEDFXeCtRPIQBzjOiB0gtgm6PVjGSTjrhkDjx8YailCjloSMCr1iRhJjMY7iJxJ40WzqvSEpujSSMNMEp3xOO/hQKVymJvEYD2Ui8AdccCMtx31IWRiBj5CJ/HCMTWoRcpCk0kOgIFeZPSntcWjadpUk9luGkkf8sQrX65XWselT0gIsTSmGFA2paYEY9UD7auO4angK85ye0c8D3112SPWuyRNnZn9Uj+BNZB0UZLbqmR6yVKR+6SD7q17Y60lhsJM3UJHgI+FZrabMWNq2jCASHE45h2FE/vBY7q87qVqgmd3TOpNGhMPBDd5XZSkSSYugDUnQc6ctvBWIII3g1EF4qS03qtxEncGz1hPI3An9oVOpaScSBz18c6zDdbGZbchFKpoi8VrVhdASkb5xKjM5YpGWaTXbS/BMDCupF1IHjzJk0XboEhraXCCAQcdwKvcJGmmopgtCScAMcN/jT4vArWQR2YTEjCBJ5ZgfsikLQ4CcQCRrr+Irmy6bLQsIbAg+yPD50qJTs0KUtUYE9mAIAGEcZMq5GpE2pR7IHaOAOgJynhT1pgAADAAQOQwFEVGXANtclStbYQpKCmSoKIugkAJIGOGGevGm/VA+rnpFTFpAU6tc5Q2OSJnvvlQ7hTB0woKjEGefPfUZaUyquh43ZwgBKcAkADuoUgNpDVBnnXK1sG5SAgEntJwMSXI5+rFK/RkHLqj95wnyxpIBYGDQjnGvBWcYTpSyXXwZDQGeRk8MznX054YVDKU5BoH7KFH+WlC8CMCqeDS8fICkwu0SqbgkzgYx8PmaCE2kkJF045JJkknIC6TjlQAqlCnCEpS6pRMBKUJBJywGZNWZvopZ2EhdveWCR+YSuV8lFJI8J50+RGzGe2Um2LTK1ZpYSRilJ951PCsk6SdM1rWoMkyc3VYqP3Z9UfOFSlPekbUfLNLtHS2z2Yf+XsrDQ0W6QVn9pRvHxqLd9LbwP/AKhocAgke6sbUVuKk3lqOZMk0r/hzv1DWdMn5HaNos3pIQ/2X27LaAdFABXdenGpEbHsNrxsqvoz5xDbkqbUfGfA91ef3GlJzBFSex+kDzBEKvI+orEd2qTyprUgpMv229mWqzuFt4JSqCQY7JB9pBggj5MVF9oGZTJ3nU4nxz760Xortyz7Ws30Z8mfZUfzrS8gZ1G45HI1Qdt7Ncsj62HQLyTmMlJOShwI9xGlUUrMNUy47C2iHkdXCArWzLV+RXxZUcWV/ZMp5YkMbd0Y6y/9EUQtPr2Z3BxPD7Q3HEEaxVQDqpwGRzkYQeeGVWrY3SZLoS3aplP5u0oIDjfCdRwOB131x5MU8T1Y3+Pn/Tqhkjk7ZlO2qy6gltQukCCkzPhA3VJ9FPSLbLCA2YeYGTa/ZG5CvZHDEboq97RUlaQLc2lbZgItKRCSTl1gzZX4gzrlVK6RdCHmwXLP+WbzgD8okd2C+Y4VmHVRntLZjl08o/p3NE2P6W9nuwHL7CsPXGE5YKEjXU1Mp6d7MH/GNYf8wHwM415qdZIOIyMd4pINkkJAJJyAxJ5DM1Zxsimei7d6VtmNSUu9Yr7CVK84geNUPpR6Zn3QUWRvqUn9IqCvuAkJPEk8qqOzugO0nhKLG4AdXIaHP8oUkjlU+x6GtoqGK7Mjm4on/K2R50ceRmevvKWoqWoqUoyVKJKiTqScSaPZ2wczFaMfQpbYwfsxO6XAPHqz7qRe9FO0WxISy5GiHMf/ALAgedNSQqNR9H9sDlksawq9LRaUd6k5mdTKFDvpD0hWCOqtKR6pDaz9kmUE8AqR+3UN6MrLbLKlyz2mzuISlQW2SBd7R7SUqBKcwTn7daNaWEPNKQrFC0wYOh1B3jQ8q45QU1LGdEZOLUyobCuOLS6cShJSDuvXSfcPOrLfMgBcYTjjwHHfrpVO2e0uyuFlwyQcFZBaTkr3TuIO6rNYVlV5UYSAMcwB4esVVyY5U9Jecb3DmzrBk3Vccj4H8aK88EyScEiTwGfupO35QSR3kf2NM2WhN2OzqDrG/fOVJySdDSsfWFm62AoCTKlDMX1kqV3XlGo60ty4q6opCYEReTeIkneMCnWM6lOsjE6Ymo1lly5eIxUSojUXiTGO4YZ6UZOOBx5C2QQuTEQYIOE5a4jAnwp26/AkYwMBvOg7zHjUM84JOhBI7wYNKWGSrEyAJ79Pie6owy76aNyh5HCLCiAiMhnkTxJGsgnvqBdbV1jgRBQlV0ScSQBPDORplU+9aQhK3YmASAMzAgAcTAHM1FM2dTaAFgzqd5OJMjeZoy1V0OBHmf1au5J+AihT0qHzFCo2VopSWFRke5T3wHKiKs05pPI9efhSirA39RPgg+4GuJsDZGDaP3E/0V9YeAIKsqRkhI5tLPvUKtHo+2ehK3bY4kXbMiRKSJcVITEqIMAKPAlNVxVgG4DklIH8FWlaxZtiXh+kfWpXENjLAD9X51mTpGlyZ36Quki3XFNhWJMuHefq8hgOfKq7sPY6n1bkjM1HqUVrkmVKVJPEnOr3sxaWWgBupY4hJ+h/ZdnsspgJFMtoW5OkVH7Q2pxqvWq3E1RzS4MqHsd7StSThUKaMpRNcqTdm6LL0Ita0OKLf5xA6xI0WBHWNn7yceBQDWrekRtFr2cxtFABU3dSslIJKFkDGYghRTO6VVjHRa09Xa2VfbA7lYfGts2Eze2dtSyTglKlo4BxK4j9tCj30uNx1aMqCUaR+6n4mjoAiJHcAPcqmVlcnIq8Qf5adJXI9Y+R+FUJlk6N9J3LN2F/lGcik4wk6ZmUxpppxtzVjISH9mrvtHE2Yq9X/wCMn1Yx7Bww0iq70L6DuW09YsFuzj9IYvLIzCBEc1HAcSCBcNrWmz2ZKGbEhKSgyXd+Ug6uTAkncIyBHmdXCC7lz6+eTu6ec3syL2psOy2h4JtDSUviD2VlKXU/eTpxExwxqZRbmbELllsbbGGKiJKv2hivmpR5UwQ9Z7abi4btAGBGsapOZ5YEaHOoi1bbesa+otrd5pRhLkSlXAnfwMH31xxyZEtMXsdbxwk7a3Je1dJnlZvKHBPY/hioe1bVB9ZRVzUT7zQt2wUPp62xuTqUEyOQ1FUva6X2QS4hSYI9+vCiK1ur3E1o8FpVbUaRTiz7aWn1XVp+6s/jVLs63FC8FYUuougSI34jTnMUfToLs0mwdM30espLg3KGPiI85qzbK6YsLwWC2rlKPEfEDOsXs1sVAJEg6ipnZ1rE5nka2ss4+TDxRZsW1NnN2lAMiRJQ4MYJ5ZpOo+IFR9jKmvyaxBAHIjeN4qr7E2mtsyhUb0nFJ5irrZ7Si0JhQxzjUcUnd841p6cj1LaX9k94KnugjLshRnAqIHJOEeIPjTV1CQZSBlGBgaaerpRU7MU0AEkqA1HrY4yoZEzOPupu+hcXpSoEEgeqqJgY5EnPSpy1VTRtVdoX64HDxndSr1pupKtwJjedB876imX5356/jkc/Kl4DkA+qCCRvg9keIB7qnGds24iYX2QkwrDGdTqYpJDqUzAifnX+1O9oNISha8RdSTA1OiROGJw76iXkuAC9dVyw8lfAmsPWvuNKP7EgysLIEYJxM7x6o8cf2aUttqCEqX9VMxvOg7zAphZnLqBnJxM58seFFtbZcupmE3ryuN3IfvGf2aPqbG1DcjENgACO+SJOpgcaFTSdhrIkJVHKhUdGX0U1Y/ZnqFDUSOSz7zQWtvHs+OHvVSi2BndGeQCe72caKClJxB7kp/CvqzwBqtaJnDvUPLt1YttQ50dUUfoXnAqIMXp3E/rBrUHa7UgxBxndj35eM1Z+gFy0NWuwOEXX0SNIUQUkxJ3J8KUlaHFmE2dUKB41NWnaWGFRu1tmuWZ5xh0XXG1FKhy1G8EQQdQRTWazZpIWefKqRrtCkaOV2hQoGPNjNlVoaAz6xH8QrftgN3bHbXjkttDY4kF0+5afGsZ6EbOUt7rACbpuoG9xeAA3wCT4VsfTi0psWz/o4IlCLy+KyIA8YHcKzllph+4RVyML2eowADWlejPoaq2LLr0hhtUHMFxQ9gHRIwk8YGOIonQzYrlstLVnbwKjKlaIQnFSzyGQ1JA1r0TtdxuyMIsjAuAJiBmlI3nVRMydTeOdLLlUI2ZhDU6GXSTbQu9S1CW0i72cAYwuiPZHzhWWdIukQRKUYqp10p20QS2g45f3ql9V2hMlSzA3k15kV9SWqR6FaVSEXLc4FBy+oKkQRnjWqdF+kqLUwWrekFJ7IcVihfPUGfa361Q7Rsy4mMFOHAbkzu48eNaBYejN8FtKbwZAREcCCrEgEyCe+nkcZUktzKk48iVu6MuWOXrIpZbEdlAlScDjHtCN2Pvo9h2w3aU3H0pk4BXsLMYx9VX2TnxyqY2dZ37KAAHFNj2FjFP3FDMcD8KWtWyWX0LU1AKvWSUx2o9tPsq4x51yzTXz5/stGdrb58/go9t6IrbJLJBb3ZXeegHHLlRXtnLDakFON31TjMjwMipUvO2JCb67/wBZteac4uK1gQMeMHSnbfUv9pvsqHrIIhSTuKfPKeFNZHyx6E12lJ6NPtqUpogCMAMjOMx+FWhGyhzG+nLWxWVL7TaQveQJ5g65U+UgtnWDlVMjjLuRiOqPaxglBaEqPZGu7nVk2Xassdc91Ru0bALRZ3WvVvoUkGMiRE92FQPQba61FVlfF21NYQf0qRrxVx1EGiEXWoU5K6NZYfvpnUZ/iKTeYQuQYJjHGFDdTHZr+W8U16X7ILzYW0Sl1EltSTCvtNyMROnGK6r1R4shVS9Cj+wMSW3LvBQ95H4VyzbNdSMQkmdCO7M/M1RbD0vtreHW3xucSFeJwV51MMekB322G1clFPwVUPp4n7Xz8lbmib2nY3lhCA2SCsFeKcAjEZqHthBwnI0Y7JdOgHNQ+E1Fp6fJ/wDbf/af6aB6dK9izpB4rKv5RQ8GN8t/PwH1ZrwS1n6PGe0sD7mPvgVLoszTKbyiEge0sj45HlVIf6VWteSktj7CQP4pNRlrfOLjzmAzUtWXeo4cqpCEIcL+ScpSfLL650msoJF5RjUJMGu1kTnTKyJJAKlRqEGDymKFX7/RPt9hlrXOhOcXyMO8KiluuWMChA4B08PsZ0yVbFJV2pBJyBVJnCYOEYb6RVtZQ4eIOPEA16Oxybj0qOF4Kn7Crw8wPdTew7WXZ3kugG6nBRxEpMTE6gweYFIDbAE3lJx+8fekfOtN39ptKBAIE5ySP4pj40bAaD0s6Os7YQl9ko+loQJTICbQ3EgpVosZg5aHAyMY2xsR2zrUlSVdkwZBCkncseyfKrJsrpEqzkJJVcBlKkzeaJxkb0nOO/fV1PTGz2hKU29gPCITaGsHAO6JHCY4VhmkzE6FazaOh2yLR2mLelsn2XU3FeOA/wAtNj6K2s/8Rs13f1v/AOdZo3aMwqR2NsZ20LCUJMExIBOO5IGKlcBWiWfoXslgy/buuI9hpN4+OXik1Ms9KGGE3LBZw0IjrFdp0jcPqjgIHCsSyRjyzaTfBJdG9it7MbStwA2iD1bUg9VOa1kYFw8MBkKzn0k7fLqupCpM3nDx9lPx8KP0i6XFMpQq+6c1HEJ571cPHcaVZLOt51KE4rcWEiTiVLUAJPEmpRUsktcuFwgk1FaUbv6CdghmyLtixC3ibpOjSDA5SsKJ3hKDTLplt6L7k9pZ7I1AySPCO/Gr7tZtFlsCWW8EhKWk/dAj+AGsF6Q7S660Kx7KMvdPlXP1D1S0/kvgjSsYbNtXWvqbOKyo3Sdd44Ae7lVmfsSW2yUCVgetqeCd3znVeTY/o5L3try+xOfec+Aw31Z+jm00vJgYu5Xd/wBqp5FXdDgpFt9siB6P7QDjoSodoKBA0IBnHwrXrDalO3XGW1BSsHUjGYGCo3/OtUe3dFgwpVoStKVKKZxu3VXwVE6BKou6Zq0VFSDW0nm5DaklSCCpE6KAIKSDiCkgjn3UZI1U48P/AMZFyb7Xyi8WhpDYlwlM4EdZjjwGvOm9qsyEpSpJU04JKVkyqJiHN6eGmkTTLYT7T6gtc9nGDoYyO7H3Uy27tIOPrZOXVDLioGB3Y1JtVdBFtMkGrSzaFBp5KEvoMp1BI1QfDDSoDpVs9YcQerIAOLyCAsD6sbsdZHuqu21zqlFKpUQRCpgzhBwxA46Y1Ydg9NAodVaD2ZuhaonHIKjPnkam4tbnRGSk/TIyy9JR6lohYBwdSOOZGY58s6mLe4p1gpbXMlJS4D2hdIOcdoYcDnJE0dHRRhD/ANJYxBEBF78mAo4kCP8ALMYGBSG0dlJadSLGsJcVJUj9CogEm6B6mAzGB3CjtW8Xv6Ka77Zr8lksdnUWkwpC1RjcOupuntAcCMKitsdFzaQlxJuPNmUOpGKY5ZicwdCcs6jLHtRK1hK5ZtCYgExPAHI4f7GrANrrvIK1FJkBShgCnLHHA+WWM0LLpdmZ4pVtug3R3axeCkrATaGoDqBkoaOo3pPliDBBFWpHaQQM8xzFUPbeznFum02Qj6QyZAwCXkqExOUKgjHVIOhm2bDtpWkEpKFQCpCvWSTod4wMEYGuqEo8x4ZzyTrcyv0iu/RLQl0IJafk4GLqxF8RGRkKzzKt1V5rpYzqlwdwP81aJ6UtlhyzWhMYsnrkcgJV/kKh3VhJrphihJWSlklEvP8A4ts40cPJI/Gk3OmzY9RpZP2iE+69VJoVRdPAw8sizWrptaFSEBDY3gXleJw8qgbXbHHTecWpZ+0ZjloO6kKEVSMIx4Rhyb5BQoRQrRk0Z20ScseIJOG730iHFn2SBxTw3FYI86cuMLH6RZ5lPlCk0j9EUATeXpoJz3dZOs51VmUIFxzHCDOgPdkr5ijqDh1PdP47qAZXpewylIPn11FdacIiD/0kac1k0hkTtCzk5pJx1BPuNQl5bZ7KiN40Pcasb9kUTHdAbQPiajLTZSBkddBSYDEbTPtJ8PwNGTtJG4+A/GknbMd1NVN1hxTNJ0Sf+NAZJJ5mPxptadrurETdG5OHic6ZXaMEVlQivA9bCAVcfRVYOs2pZQRISpS+XVoUoH94JqrNsmtH9CTP/wDSkjKzukZfWbHxpy4EjSvSzbuqsoPBUc4A/mrBLpQpL24R3zM+fjWxenlR6hgD2nSPIK/lrL2QLgBGnvrgm9Mm/f8AVHdjjcSf2B0ef2g0pTYTcmCpR92GJ5xjVg6M+j1bD8l9pBGZSVLcUNREJCQcDmRlgYkyHQ0rs2zmeoBlRcVvnta+fjVr2FaFWlJ61otqHrSN+qVDD3cqnjmrcI+fn9E8jbdsc2GytpKW7o5kY8fGqbt7o9ZkWjrWj1ThPaCYurHFOh4iOM1cnEhuSVTCVScuVVJnZTjzjjzpuhRF0awPV5e+syelafJlbuxEWA4qbN1eo0VTVNkvElQhcRO/CIqcsdlK7yYlKRJVkRpgd+fgah7XZXrpU24FwoiFDdyI3Vz09nRVKyJ2hsm+oqUYAAlWQgVWH0C1WpDLIltCpUfrEYkngAPOkdp2m0qf6i1LKQYgDBuDkobxznGr96PujYs7qlKE9kkGNYAA5Ga6Yw0Vb/Yy902SFk2etoXrMQUpTKmlHBWUlBPqq4eqeFHstoadUHG0/lUhQKFCFCRBw0PESKl3rG2kG8opTHa0HLCoo2SzrbUpqGVNnBwmN0XpOWOUzjhBmubQ2/FloZdqlwRW17OhbAa6kOLUolSiIKTJg3jlhA3b6il21VlKWnHUvoMDsEl1s7vt4ajOphm3tPy04pIdjMSEuA6g4FJ+M1FHYjNmKnQgrgEgqMlBzCgeHLnStPaRVKUN4cEpsfagwUysKGQGQPA/UM6HDxqw7P2gla7xF1Y0OBgwSOIndlwk1nlmsTimjabpZWVSlWjiScb6dc5mJxp+ztcoUEWhBQT6rg9Qn7KokfDdSWqL28eClRyKy79JGwXrp9VxkA+KgfIivNTjZSSk5pJB5gwa320WpxwoWVBYQm6CPWKZmTjCo4e+sQ240U2l4EES64RIIkFZg46RXp9LljNujzuoxOCVkfQjlSoHCu3OFdxyidzjRgijoTGhpTuPvoAQuUKcdx8KFAF+dtKSMo4yk+c50zetSZOcE44pkgZ+2PKNKcLabA7KnecPf00mtKDm4qftLdH8lbszQm243MIZhMZdmJ3evp3iuvu4XQ0BjmbpnuBM6zJ/uVKW4/OkcnHB3GUjnXUpaH6VQ5LJPdKYpg0Ff7QxBJGpTPeIIGn96YO2YCIaJwxw3HdmNMakm0oEm+TIwvFJ8IE+dcUkH5HxNFCshHLLexuHvEb6Z2myxmD891Tz6UjUeE76YutTmez91Q3TjHHHSkxohhZxqFeFGSymdfAz7qkgyNys+OfGBXE2YnQ56hWMd1YNDMBGiVfPOr96GlAbQAyKmXBjr6qonL2fLhVQ+jHOAcJ9RXzjV89FNoQzaSHB2llLbZuKkEhZVir1cBGGdZm6RqKtln9NVkK7I0sfo3kE8lJWn+Ip8ax7o6hTriGDgTmTpAEjnXorpjsv6TY3mQJUpBuj7aYW3/mSB31hFiaSlYfyUgXkceBneCa4Mzq17/s7MSbW3g0BfSFVnDdms7SnClMJSDGAmSSctTJqw9Htr2hSCbQ2lAvYqBPCAJxUZ3CKrNmsTZfbtqFfkw3eSZxmcW8PVUD5Y0vadpu2m1NNY9VfvKUMlFOk7h76hG4RvySbuVE/tDaIWpTaVBKkxJKZGInDETTaxbPS+sfl3VHdF0DjwqN2wh3/ABFtbUXUIC1JyGCiO8xpwq3bRt7bCDPZndvOYSKy4J90nsF+EMhZk2dKhegGZN7Pzxqg7L28E29xlRhC1go3G8kdn95Kz3ga1X9vbdetNo7BURfutoHOAANST76tlm9HiF3Xn3HFuJGKGroTI0BViYM9oRWoLu34o3+lX5LN0o6JtWyzjBPWJktqyjgSPZVr3HSmXQi0Esht0FLiFKRdURfIGBvZYyCB901NptBbbQlAcJV2SlXrA8YjPfStvsjKUh1xIS8YIOuAgSZzHzlVnljpaa2RPe7RzbDzaEhboJKY5GMiRv7qp+2ukNnfR1LS0hRIJvGJxBIwA+SamukNtLrRQ4m6TkRje5EVn42bZVH10jMEHA8ZB1riebU2lx+39l449kyx7TYbDTZUlOCSIzuY9riASZBzE4ZCojZvSLtqQUl1KBiqJKRMdojPn5UmxYrmT5CAk4TKTwg4RUfa9oIZSQ2kgKPaKR60A5nJIgnzxxisp6nXJaFx3LNt6xLtLILLhITkkns74EZeMVAbD2wFvLslpRECEJWMFCMc+MkHdTjoq84tBUyYKQSpKjgQJx5nGpZbLD60KcaBcbMhKpkEaCCDdywHCtbK4yX/AErV7xYw2i05YrSWmSpxAShRbKu0kqSDdQTnE5HSllIsm0W8Qkqzg4LTy1HMYHjTDpU671ztpWmL0rwMgBCcBpuisz2btFxkhSFERxy5bq6I9P8AVWqDpojLPoenIix9IOhb1nlbcutjOB20feAzH2h4CqyFca0jo/05Q5CXzdUMAsfHePnCpDbfQ+z2sdY2Q24cQtHqLn6wyniI76pj6yeN6My/JPJ0sZrVif4MrSriKMF8adba2C/ZVQ6iBOCxJQrkfgaYBJ4+NelGSkrRwSi4umKFzjQol07jQpiL+oYf+nVjpfcE+YE/jhQKHNWHu5bmOH3ifOuLYaGKlq4kpkc4BgfPGiqQyn9MgE7mr3uJqhkTcSf1FoHHrF/1GKK6qR+ZtE/ekc8TnTtpqfVtA72bscpMzxozjK0/8S1jlKCe8yYpUFjA2g4DqXCd5CZ8opq64ScUuJyybTM65nlT5dsICptLRmczdnfoZwpqHicrS0BEYZmc5VAnlFMBJN2IPWxxbGP+f/auKUiBdvxlHUj+r3bqWvOEyH2zBBGoyGcDHKidW+T+dbUcPZOnkdKzQ7Gji0HO/wD9EfFVIOFsH1Vzj+iT/VT16zWhRxW1oMhoNxNKJYtEghKTd4jHDUZ+elIZHQ3J7K9P0Sc/GpHo9bEs2hlwBXZdbJPVgAJvpvSQcBE1xKrUcgMN0GfA8aXcetREFrDHC9n5TFJgejh2k93gR/f3VkPS/YyWbSq8CGXiXEECYJ9dHILM8lCtB6Iba65CAoQsstucyoELAw9laSO6lOlOyE2hooVhJlKvqODJR+yR2TwNcGaGuOx14p6JbmN7P2s7ZVFKCFsqPaQrLvGh41edm7bsikpUlfVqiBeHZB4nSomyWEtlbTiIxhYgXkkbjqMu7EcYfa/RxxMlCpaOqdcciN/hXHC5ccotljG7NN2XZQFda44iLpEzhBzxnL8TVF9Im1gVHqXb17sCB2Uj2iDqTgJHwqu2frmE3EQUZwRgDvjSo7a7loUQVlPVTiUjLjwHcMq1vJqK4RhY9O7J70YbL6y0rdiQykBO7rHLwB/ZQlZ5wa155BbbSlCCsmJAzHflVZ9F+zkt2ZZHqqWFg7xcAB5Z1c2mVkhajCRkgDEnSdw4YVRq/nHsnLmgO2OAmSSQRB1GWUcMKiNqNsBZcfF8pwF4koT3ZTgcedSttK5upwN3DnjVet4DaDfAN7FWsxodZozSVOlwZivY22lb27Qi71arpyUkHA6EHIVBmytoAvXVKGZj1tJ4HhV3siQuyXlYBQBROcHLyqi2SxAF9TigUhtaoOYSmSoz4VxZIyjJb8qzpxyVP7Fed2QW9otruJ6lyVp0CzBvIkCRE3sjpxjRRsizutKSloBC859bLK9850j0NuPsILkKj1NYz7Q44keNK7Q2kmxhTj67rQUlMn2lKUAI4CfBJNelCKlBPySk3GTXgzrpRtQ7KdbbbTevkLWSOyWwYuDeo5ndCd9Wbb77S7GzaGzC3e02YhQTGMg5iSBHeKsu3ej9ltjX/mUhTY7d4GFCfqEYyco1qg9K7YXXAEJhKYQ2gZADAAcAMKlLTJJ1ubg5Rb32HFg22HU9U+nEykHNC+UjOPZOPOqv0p6BlMu2XEHHqv8Atn+U926kunCywxZ2EntFRcURvSI8JUf3aN0V6cFMNWg9nIL+CvPH5DWLJjWvH/Br6mPJ2T/koxBBgyCDxkEe41PdH+lL1mMA3kapMx8/ONXjpD0cYtg61ow5HrJxP7Q9sZY5jPEVm+0dmOsLuOpg6Geyob0nX310QyY+oWmS39f6Iyx5MD1R4+cmtbI6S2W1p6tcdoRcXiOQJz5GqV092IxZVoLSyCuSWiZCQPaBmQJgRjOOQEVU0KKcQY76VtdoccVeWoqMAYmcAMBjjSw9K8WS4y29Dy9RHJCmtxHrOPnQrhBrtdpxmjltAKQEuYmMFInLQBqjFtgDtX8MSSpvj9kbvOotTrpMqaSc8CUEY5zjMfhQVanQTDbSQRGe7eYmfkVQyPgizH2V473Gx70/Ck1s2QGO2DmSFNkDiTdpuH3MAG2BOI0nfiTvmiuF36rPctJPkaQDxbFnAm+uOafDLPhXDZ2MxaCPvKA+fOmalOnHq09yhhy3a0A88NMDjgqPiJ8shRQWKnZ7JP59P7/4AUVWyGiID48T+OFNzbVyLyZPMH44DlQTtJYJwwj6sicdBPu1ooL+wodkKyS6Y4FXPfRf8GcggOwDOpE44zAnPOmwt6xJ7U4+yreccMudd/xVyZIVMzkYGcACPnzpV9x39hQbNdEBLyABlieG8UmuyPpx6xBzxnETnGOpxpJdvcVEhRAiIgZa5zuw99cTb1Rilw4yZI3QeXznS39ht6L96MtoylTC1i+gqUmDB6s5gak3lKJ5JrTtk2zrUFCyCtOCvtA+qvvHnNeeNm7ccYebeQAClWKVZqTheTwBBIniK0hXSBTDSbS0b7BhSVXSVpSSLyDBABBIBCssYzAPHlvHK/DOjH3L9i17X2eFKAMBeAQ4cljRtZ0V9VXdzg+qW2VJgAnApUJE8R+FT+wtuWfaNnCk+0kFSD6w384OFNbeS12XwpbYwS8kS4gblj20+fOuXPhd6o8l8eTbSyn2G1Wd14smGX57TCzmfrNKgdYDmIx3gVYLFsVCVCUyM49/dStr2K08lK1JbdSDKHBCgCNxzQqeRmnbNpu4LBI0V7Qjf9bnnU9cG+5UzaUktnY7sdnSysQAEKiABAzJy8+6rIXQYO741XbSAW8DOoI8iKZG0uKSQAS4J7IzOcEcMM6csrxXtaZJ49W5LbW2qy2pS3F3U4TiI7POodO3LHalG4ttU6KOB7jHlVJ2yw8SV21AQ2kwElRJUdISMzUfZ9nqUJ7JGcBN3ujOueWebW+25WOGPg0zbNiceBurCAB2AMgePD8eGNLttgKLFaEFYLjwuXh9UjIcJJmnGz2TZgp1xZSgIJUASRvgDK9lgNah7JttFoXcCSlCSSmT2lE5kjIcqi5SctSXHLKQgv0thugG0nGXOoWCI7KeECPOMKtfTjoojaTSQXOqU0ZS5EpAVF8ESAqQBGsgcZLbejLa2fyqi0VCJSB1qkH1kpBGEiRJymiW7asIDaOy2gADEmIGZJxWrj/vXfGUtpcEZKL2ErY8llhuysqUG2khIKjKoGalH6x0GgOAGQibDZJVfI+6Nw38/nWlW2r+Kh2dAc1HeeFQvTjbf0dkoSfyroIEZpTkpXDcOPKqQi5MxKSSKL0y2mLRalqSZQnsI5JmTxBVePIioShXK9FKlRyN2TvR7pG7ZiB6zf1ZxHFJ0NaVZ37PbmYwcbOYPrtnfvHMeNY0Kd7Ot7jKwttZSoeB4EajhXLn6RT7o7P58s6sPVOHbLdFi6SdDnbOStuVtDH7aeJAHaHEd4GZrSQdIq57S6eKcs3VpSUOqwUoZADVBzBPlvqmJHOqdM8un/IY6hY9X+M7dV8muUIoV0HOaY+8nM+Fwe8YnHdRS+2Mbpn7pHwNRarOB7SstG1g+ScN9cusxKnFzuhY+NaoLJFVobON3Hzw09UUg482fYVPIfjTFLjXsh9QkmbpOJ5rpS+J/Mvn9keGRopBbA7BiEL/AHR/VSJaH6tw80D4LxpUoM4WdXG8jyJuCk+qP6hHeI+FMycuj9WoD7g1/bohZGqV+A0+d9HUhU4WZPj/AGrgDh/4VHj/AKKBiC2coQrwH9VDqD9VQ/ZGv7VHW2v/ANugfej4t0kQdWmAd+H9NAg3UHcqPu/6q4bNvC/D/VRFKjWzDlc+MVz6RHtsj9ykMSesZOEKPdh3mYFPdlbecsaVthZKFEnsq9UyOYUDjIG8wcTLF5ZPrPt79/uVnTK0I0Ckqjh/esTgpKmOMmnaLtsu1XSHGFXVCFHq8EyR67f2VbuY0NXnYvTpp0dXa4QrLrP0avvfUPHLllWJ7L2quzqiCpucU5Ebyndy1qxm1NupvAyD7SfWHAg58jB41zSg47MspWatatjKQeusjpbKscCC2scRilQjeDwio62bccCVItLC2yRHX2eMD9a4uUyOBPKqDszbFqssmzuyjMp9ZHG8g+r94Rzqy2H0hsuCLSyUH6zRvJ5lKiCkcAVVGWL0UU/Za7DtuzKACbU2FZEOgsydcFYeB76W2jsgOjrGp6wDBTTgM8MDiKrgd2e/6jzMnRR6tX7qoJNFV0TQe0lIPFMH3VLRW1FNVko1su1OouuNLgaLHu3GmttsFpbH5NltKvrvvIQgDuJUfCmv+BLH1vE/jRDs25iQE8495qC6aCd0yjyuqHy2GVJH0h/rDGKGElSJjGFqASRmMRSFh+jWc3rNZ0oUMnFkuuDimeyg8ppi6tI9oHvve7DzpErBzJPDIeA/GqwxqP6VRiU75JC17RKiZJUo54yT95W7gMKbtokyrE6DQcqInwphtzb7VlT2jeWR2Wwe0eJ+qnj4TVVG3sTch9tjazdmbLjh4JSM1H6o+J0rIdqW9b7qnXDKlHLRI0SOAo219qu2hy+4ZOgHqpG5I+SaYmuzHj0r7nPKVgrlA1yqmA6aOBSYowNACopUtmJ0pFKuFKBw0wAQaFFk12igstqGU3sG2Rz7XcSU5+FOG3lJyLaZAyblM45Sc6ZpIgC4o44i8ABj9/H550fsA4NpG6XEzPcqtmRZ61j2n1TrFxAHgTP+9c+ntmYecOH6zA+Ch8ijSr2AkE5QVHv7Mg/7b6UbQ6cb6ROXrEccLopiEk2huCTfVxDiuM5rmfnmih5Mi8lwxnn7/jlTh20ualIjUmI8ifOmxdJOK0Y/dPfiRQAbrkxghWZzJnXSBNBTwIi4CrE4qOA0wOXfrQAx9dJP7B/nrrhM9p0T9opMRh+spDCFW5CctZ44+cRwri4xltB7uOfZTMeVcMnJRPEGPcCN/hSS0KnDAcXcf4MKAFAdA0P+mo/y0cBRnsJTG9AGM886QDasgExuKycuSBjSgYXncbPIqA/hme+gDi0KmTcHC7h+JphaGpzjwA9xpy+yqcUtjDJJUSPAe801WIxup/dMeFDBDF6zjHLhSDa1NmUKj3HmNacr7tNP7Ui4M/7VloY+s+2BPb7JHtDLnvHzjUkLSF4kJXx9r94QSec1V1p+cKTSogyCQeBipPGvBRTLZ1KDleTwMK/poyGQDgUg94PuquNbVdTqDzH4RTtG3zq2D3x8DU3jkaU0Whpa8rx8TT1hHjVRR0mj9Ef3/wDTSn/i1Q9Vsd6p9wFY+nM1rRd2m6UtFqbZTecWlA3qOfIZk8BWeWjpVaVYBSUfcTj4mSO6od11SjeUoqO9Rk+JprA/Ink9Fw2x03JlNmTH/MUMf2U6cz4VT3XVKUVKUVKOJJMk8zrRYrlXjBR4JNtnZrhoVya0I4a7QAroFAAFHSK4BRgKYBhQnjXK7NAHZrtFmhTAtTMiEhDU7ozG7KN2tPkB0H82nyjwmhQrRk79GeOMJSMcoGsgTjlRDfBCZM6AESTGpu0KFF7g0JKaKTEEQcZUTnlkoaRSReSfbII0hfwXQoUxIVGAkL77q8v+rSV0xeC4G+6oT4LmhQooLEwmc1zuEL/7lFWxGOXHE9/rTNcoUhhJT9af2T8VV3CeyJ8qFCgBNTRzKQfA/DjSK0jVHknyoUKQxuVJGSSD3VwN3hIHOTy8aFCkA3WAOfye6myo312hSGEKRvopSKFCkAIrldoUAcoUKFAArldoUAcroFChQB0CuihQoAMmjCu0KYHRXIoUKYBYoUKFAH//2Q==">
          <v-layout
            column
            align-center
            justify-center
            class=""
          >
            <h1 class=" mb-2 display-4 text-xs-center">Asian Cafe Express</h1>
            <div class="subheading mb-3 text-xs-center">Authentic Chinese</div>
            <v-btn
              class="blue-grey white--text mt-5"
              dark
              large
              @click="goToMenu"
            >
              Order Online
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The best way to spend your meal</h2>
              <span class="subheading">
                Cras facilisis mi vitae nunc 
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large>color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Authentic Chinese Cuisine</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large>flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Impressive Menu</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large>build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Mouthwateringly Delicious</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="assets/chopsticks-cuisine-delicious-699544.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline  mb-3 text-xs-center">Dinner has never been more delicious</div>
            <em>Order online today!</em>
            <v-btn
              class="blue-grey white--text mt-5"
              dark
              large
              @click="goToMenu"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline ">Asian Cafe Express</div>
                </v-card-title>
                <v-card-text class="">
                  <p>Master Chef Michael Leung and his wife, Susan, opened Asian Cafe in the summer of 2005.   Michael was born in Hong Kong & trained under the country's best Cantonese Master Chef.  Michael is well known for introducing new & exciting dishes from Hong Kong and has been cooking authentic Chinese food in the Valley for almost 40 years. Michael, a Tai Chi Master, enjoys posting on Facebook, writing for the local

 Chinese newspaper and cooking up new specials to add to his 300+ item menu.</p>
                  <p>Susan is the heart of this operation.  Customers love coming to see her and just chat up.  Susan’s drink recipes are yummy and true to the traditional taste of old school Hong Kong Cafés.  Besides working alongside Michael and their restaurant adventures for the last 40 years she loves to travel, hang out with her kids and enjoy trying new foods.
 </p>


                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline ">Contact us</div>
                </v-card-title>
                <v-card-text class="">
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon>phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title class="">(480) 668-5910</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon>place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title class="">1911 W Main St. #3, Mesa, AZ 85201</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon>email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title class="">Leungmike36@yahoo.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer>
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class=" ml-3">
      
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    // msg: String
  },
  computed: {
    menu() {
      return this.$store.state.menu;
    },
    menuError() {
      return this.$store.state.menuError;
    }
  },
  methods: {
    goToMenu() {
      this.$router.push("/menu");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reduce-parallax-img {
  background-size: 50%;
}
</style>
