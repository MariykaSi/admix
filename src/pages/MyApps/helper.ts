import chart from '../../assets/img/chart.png';
import imression from '../../assets/img/imression.png';
import rate from '../../assets/img/rate.png';
import ecpm from '../../assets/img/ecpm.png';
import appIcon from '../../assets/img/appIcon.png';

export const getMockData = () => {
    const data = [
        {
            id: 1,
            name: 'Revenue',
            value: '510',
            currency: '$',
            extraCharacter: null,
            margin: '+12%',
            valueIncreased: true,
            icon: chart
        },
        {
            id: 2,
            name: 'Impressions',
            value: '12.2',
            currency: null,
            extraCharacter: 'M',
            margin: '+8%',
            valueIncreased: true,
            icon: imression
        },
        {
            id: 3,
            name: 'Fill rate',
            value: '37.5%',
            currency: null,
            extraCharacter: null,
            margin: '+4%',
            valueIncreased: true,
            icon: rate
        },
        {
            id: 4,
            name: 'ERPM',
            value: '2.7',
            currency: '$',
            extraCharacter: null,
            margin: '-5%',
            valueIncreased: false,
            icon: ecpm
        },
        {
            id: 5,
            name: 'Revenue',
            value: '510',
            currency: '$',
            extraCharacter: null,
            margin: '+12%',
            valueIncreased: true,
            icon: chart
        },
        {
            id: 6,
            name: 'Impressions',
            value: '12.2',
            currency: null,
            extraCharacter: 'M',
            margin: '+8%',
            valueIncreased: true,
            icon: imression
        },
        {
            id: 7,
            name: 'Fill rate',
            value: '37.5%',
            currency: null,
            extraCharacter: null,
            margin: '+4%',
            valueIncreased: true,
            icon: rate
        },
        {
            id: 8,
            name: 'ERPM',
            value: '2.7',
            currency: '$',
            extraCharacter: null,
            margin: '-5%',
            valueIncreased: false,
            icon: ecpm
        }
    ];

    const apps = [
        {
            id: 1,
            title: 'TrackDemoAWE',
            price: 224,
            currency: '$',
            margin: '+16%',
            valueIncreased: true,
            icon: appIcon,
            status: 'Sandbox'
        },
        {
            id: 2,
            title: 'RacingDemoAdmix-2',
            price: 224,
            currency: '$',
            margin: '+16%',
            valueIncreased: true,
            icon: appIcon,
            status: 'Off'
        },
        {
            id: 3,
            title: 'TrackDemoAWE',
            price: 224,
            currency: '$',
            margin: '+16%',
            valueIncreased: true,
            icon: appIcon,
            status: 'Live'
        },
        {
            id: 4,
            title: 'RacingDemoAdmix-2',
            price: 224,
            currency: '$',
            margin: '+16%',
            valueIncreased: true,
            icon: appIcon,
            status: 'Sandbox'
        },
        {
            id: 5,
            title: 'RacingDemoAdmix',
            price: 224,
            currency: '$',
            margin: '+16%',
            valueIncreased: true,
            icon: appIcon,
            status: 'Live'
        }
    ];
    return { data, apps };
};

export const getStatusTextColor = (status: String) => {
    switch (status) {
        case 'Off':
            return 'red';

        case 'Sandbox':
            return 'yellow';

        case 'Live':
            return 'green';

        default:
            break;
    }
};
