import { Species } from "../../helpers/speciesEnum";
import { HairType } from "./hairTypeEnum";
import Swatch from "./swatch";
import { Token } from "./token";

const BowlCutHair = `<g id="g30627">
    <path d="m 344.36706,64.774008 c -5.104,-13.903999 -20.00667,-27.038666 -20.00667,-27.038666 -18.128,-8.321333 -47.904,-16.487999 -60.11466,-16.487999 -0.19867,0 -0.39334,0.0013 -0.584,0.0067 -13.72,0.310667 -58.07067,12.710667 -65.34133,30.484 -6.09467,14.898666 -11.09067,38.983999 -9.87734,56.389327 0.71067,10.184 9.192,27.32 11.07334,34.984 1.17866,-1.65467 2.35733,-3.308 3.53466,-4.96267 0.816,-1.144 9.88933,-14.23733 10.11467,-14.096 2.69866,1.692 2.924,5.11067 3.69866,7.89867 0.888,3.196 1.83067,6.392 3.02534,9.48933 -0.0107,-8.07466 2.832,-23.84 5.06133,-28.71866 0,0 16.33733,-10.83734 19.888,-18.498665 0,0 0.968,-0.12 2.44933,-0.250667 l 3.41334,-9.099999 2.724,8.775999 c 2.55733,-0.032 5.188,0.09333 7.11066,0.574667 5.232,1.308 27.74134,3.105333 41.34,2.393333 14.704,-0.769333 48.26,-3.104 48.26,-3.104 0,0 -0.66533,-14.834666 -5.76933,-28.738666" style="fill:#383838;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path31231"/>
    <path d="m 273.30879,22.143743 c -3.55333,-0.574667 -6.65333,-0.896 -9.06266,-0.896 -0.2,0 -0.39334,0.0013 -0.58534,0.0053 -13.71866,0.312 -58.06933,12.712 -65.33999,30.485333 -6.09467,14.897333 -11.092,38.983999 -9.87734,56.389334 0.71067,10.184 9.19067,27.32 11.07334,34.98267 1.17866,-1.65334 2.35599,-3.30667 3.53466,-4.96134 0.81467,-1.144 9.888,-14.23733 10.11333,-14.096 2.7,1.692 2.92534,5.11067 3.7,7.89867 0.888,3.196 1.83067,6.392 3.024,9.48933 -0.009,-8.07466 2.83334,-23.84 5.06267,-28.71866 0,0 0.424,-0.28134 1.14267,-0.78 0.22133,-0.88134 0.5,-1.57734 0.848,-2.03334 2.76133,-3.624 5.656,-7.13733 8.42133,-10.707999 2.66,-3.434666 5.82133,-7.414666 6.16667,-11.897333 -2.264,1.954667 -4.63467,3.669333 -6.54667,5.845333 1.57067,-3.628 4.58933,-6.436 6.22667,-10.306666 2.008,-4.745333 3.33733,-8.852 3.33066,-14.109333 -0.444,1.54 -2.33066,5.817333 -4.268,6.809333 2.36934,-4.322666 1.37734,-11.752 0.87067,-16.777333 -1.26133,1.312 -1.10533,3.582667 -2.49867,4.729333 -0.324,-4.526666 0.44534,-8.731999 1.34134,-12.934666 -1.56534,1.461333 -3.41067,3.492 -5.19334,4.516 0.612,-1.393333 0.7,-2.744 1.52667,-4.145333 0.852,-1.445334 2.06533,-2.744 3.016,-4.102667 1.772,-2.534666 2.78933,-5.109333 5.35333,-7.006666 -2.10533,1.170666 -4.384,1.717333 -6.22666,3.136 1.35466,-1.638667 2.25066,-3.568 4.068,-4.998667 1.44533,-1.136 3.20533,-1.870667 4.74266,-2.816 2.016,-1.238667 3.78534,-2.642666 5.73867,-3.874666 3.05867,-1.929334 6.88933,-3.364 10.168,-4.910667 2.16267,-1.021333 7.728,-4.601333 10.12933,-4.213333" style="opacity:0.199997;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path31241"/>
    <path d="m 270.03973,94.368008 c -2.43867,0.02133 -4.552,-1.036 -6.93467,-1.470667 -2.88933,-0.529333 -5.89733,-0.817333 -8.83333,-0.961333 -0.53467,-0.02667 -2.88934,-8.972 -3.396,-8.982667 -1.81067,-0.03467 -5.516,9.325333 -6.62134,9.493333 0,0 -9.856,10.647996 -15.132,13.557336 -2.576,1.42 -4.72266,6.07866 -4.72266,6.07866 -1.744,4.068 -5.23867,14.43067 -5.504,22.98667 0.0253,-0.83867 -0.56134,-2.04267 -0.77734,-2.864 -0.268,-1.01867 -0.54266,-2.036 -0.89066,-3.03067 -0.85067,-2.432 -2.24267,-4.63066 -3.92534,-6.57066 -0.1,-0.116 -0.228,-0.24534 -0.37066,-0.368 -0.55067,-0.47067 -1.32534,-0.83334 -1.576,0.156 -0.16534,0.652 0.32,1.34533 0.096,2.00666 -0.224,0.664 -0.616,1.44534 -1.12667,1.93334 -1.40533,1.33866 -2.448,3.17066 -3.57733,4.756 -1.97867,2.77866 -3.95734,5.556 -5.936,8.33466 -0.0987,0.13867 -0.84533,0.94934 -0.80267,1.12667 -0.728,-3.008 -2.01066,-6.49467 -3.43333,-10.14667 1.292,-0.66666 4.096,-2.11333 4.096,-2.11333 -9.92933,-18.97333 -7.40533,-43.341332 -2.892,-63.643998 -5.312,17.233333 -9.19467,37.033328 -5.312,55.109328 -1.51467,-4.228 -2.70267,-8.28666 -2.94133,-11.70266 -1.20267,-17.238669 3.768,-41.161335 9.79866,-55.902668 3.01467,-7.370666 13.54267,-14.896 29.64267,-21.190666 13.81333,-5.4 28.19733,-8.472 34.71866,-8.62 0.18267,-0.004 0.368,-0.0067 0.56,-0.0067 12.08934,0 48.35467,10.402667 58.00934,16.282667 9.65466,5.88 20.67999,24.651999 23.30399,32.653332 1.19467,3.645333 1.72667,8.325333 1.95334,12.341333 -2.76534,-10.966666 -6.83467,-21.735999 -13.984,-30.473332 7.576,9.257333 7.54933,22.615999 11.13866,33.414666 0.61067,1.835999 0.972,4.538666 0.34534,6.491999 -3.912,2.006667 -5.74534,-8.942666 -6.30267,-10.791999 -0.79867,-2.652 -1.66133,-5.286667 -2.59467,-7.894667 -0.848,-2.373333 -2.328,-4.909333 -2.84799,-7.357333 1.21199,5.706667 2.06799,11.485333 2.63333,17.290666 0.21333,2.185334 2.172,11.329333 -2.552,10.44 -1.72933,-0.326667 -3.708,-1.886667 -5.71867,-1.457333 -0.992,2.264 -6.22266,0.408 -8.05066,0.484 -1.25734,0.052 -2.588,1.074666 -3.828,1.102666 -1.27334,0.02933 -1.87867,-0.945333 -3.14267,-0.876 -1.26533,0.068 -1.756,0.524 -2.96533,0.476 -1.27067,-0.052 -2.26,-0.558666 -3.5,0 -0.79867,0.358667 -1.40667,1.569334 -2.164,1.756 -1.09334,0.269334 -2.21467,-0.837333 -2.97334,-1.402666 -0.69866,-0.521334 -1.25333,-1.408 -2.17866,-1.394667 -1.464,0.02 -1.50667,1.426667 -2.48,2.038667 -2.06534,1.302666 -4.572,-0.313334 -6.73067,-0.121334 -2.64267,0.234667 -3.56533,0.201334 -5.64933,-1.356 -0.97867,-0.732 -0.83734,-1.162666 -2.184,-0.353333 -1.21467,0.729333 -1.20934,1.456 -3.01067,1.36 -2.55867,-0.136 -4.92267,-1.089333 -7.66933,-0.697333 -0.36267,0.052 -0.716,0.07733 -1.064,0.08 m 79.08666,-20.796 c -3.536,-12.968 -19.13066,-33.907999 -24.31466,-36.823999 -16.72267,-9.405333 -48.596,-16.865333 -61.17467,-16.58 -12.57867,0.286667 -58.60267,12.292 -66.32133,31.16 -7.71867,18.866666 -10.812,44.582665 -9.95467,56.874664 0.85734,12.29334 11.67067,37.46134 11.67067,37.46134 1.51333,-2.12534 3.02666,-4.25067 4.54,-6.37467 1.816,-2.54933 3.632,-5.09867 5.448,-7.648 0.80266,-1.128 1.60666,-2.256 2.41066,-3.384 0.33734,-0.47333 0.632,-1.06 0.984,-1.5 0.69734,-0.86933 1.15467,-0.024 1.57867,0.64533 0.68533,1.08134 1.188,2.09734 1.43333,3.37734 0.136,0.71733 0.28267,1.44133 0.49867,2.11333 0.0973,0.3 0.10533,0.67067 0.23067,0.948 1.788,3.95333 2.22933,8.76933 4.88666,12.39467 0,0 3.68,-26.39067 6.55467,-32.68 0,0 9.20267,-6.14534 14.67733,-12.656 -1.71066,4.32 -4.70933,8.152 -8.42933,11.08666 6.924,-3.13466 13.892,-7.32266 16.77067,-24.847999 0.54266,-0.07733 1.284,7.64 1.33333,8.526667 0.62933,-0.07867 1.108,-0.350667 1.408,-0.832 0.64,0.512 1.364,1.228 2.232,1.368 0.748,0.121333 1.47867,-0.268 2.25467,-0.07467 0.88266,0.217334 1.088,0.682667 2.02133,0.624 1.84667,-0.117333 1.66667,-0.757333 3.536,0.02667 1.888,0.792 3.55333,0.672 5.39333,1.210667 2.52534,0.738666 5.04534,0.056 7.71467,0.310666 1.28533,0.122667 2.71467,0.942667 3.87867,0.526667 1.14666,-0.409333 1.516,-1.865333 3.06533,-1.542667 0.55067,0.908 1.25867,1.094667 2.196,1.088 0.96,-0.0067 1.34933,-0.172 2.404,0.106667 1.25867,0.333333 1.88933,0.096 3.15067,0.0013 1.48933,-0.112 1.68533,0.734667 3.05733,1.014667 1.43467,-1.076 2.91867,-0.565333 4.53867,-0.701333 0.33466,-0.585334 1.12133,-1.110667 1.856,-1.197334 1.488,-0.174666 0.97066,0.597334 1.86533,1.018667 2.084,0.982667 3.41333,-0.134667 5.24,-0.528 2.19867,-0.472 5.16667,-0.286667 7.27867,0.465333 1.20266,0.428 1.33066,0.934667 2.53733,0.445334 0.62267,-0.252 1.07067,-1.288 1.828,-1.398667 1.76,-0.257333 2.704,1.249333 4.39467,-0.670667 0.46,0.292 1.03866,0.432 1.49066,0.649334 0.70534,-0.832 1.40534,-0.601334 2.36534,-0.466667 2.48666,0.349333 4.70666,1.502667 7.27199,1.54 1.69067,0.024 1.344,-0.190667 2.212,-1.265333 0.59467,-0.736 1.00267,-1.877334 1.96934,-1.025334 -0.16667,-0.148 1.57866,-0.897333 1.72533,-0.925333 1.024,-0.189333 1.70667,0.278667 2.66667,0.521333 1.29866,0.329334 4.06533,0.970667 5.16933,0.048 0.352,-0.932 1.472,-1.668 2.16533,-2.558666 0.0947,0.185333 0.544,0.633333 0.61467,0.825333 1.04933,-7.032 -0.46533,-13.878666 -2.324,-20.697333" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path31251"/>
    <path d="m 238.66999,99.345208 c -3.488,2.616002 -15.17066,10.810662 -21.448,12.904002 0,0 12.032,-2.96534 15.868,-6.452 3.836,-3.488 6.27734,-6.801336 6.27734,-6.801336" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path31255"/>
</g>`;

const StylishShortHair = `<g xmlns="http://www.w3.org/2000/svg" id="g37778" inkscape:groupmode="layer" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:label="Page 1">
    <path d="m 199.51693,143.11094 c -1.88267,-7.664 -7.84,-32.50533 -8.55067,-42.68933 -1.21466,-17.405335 1.26,-33.785335 7.35467,-48.682668 7.27066,-17.773333 51.62133,-30.173333 65.34,-30.485333 0.192,-0.004 0.38533,-0.0067 0.58533,-0.0067 12.21067,0 41.98533,8.168 60.11333,16.487999 9.012,4.136 15.712,10.752 18.384,18.152 1.42933,3.958667 1.51867,7.752 0.244,10.408 -2.94,6.125333 -18.764,13.445333 -21.60266,14.717333 -1.78934,-0.806667 -8.64267,-3.916 -13.524,-6.356 -5.93067,-2.966667 -24.26267,-8.444 -34.776,-8.444 -0.52,0 -1.02134,0.01333 -1.504,0.04 -10.47067,0.581333 -30.128,10.356 -30.468,16.46 -0.24534,4.425333 -11.512,22.145339 -17.23067,30.009339 -3.54933,4.87866 -4.004,20.644 -3.99333,28.72 -1.19467,-3.09734 -2.136,-6.29334 -3.024,-9.49067 -0.77467,-2.788 -1,-6.20533 -3.7,-7.89867 -0.22534,-0.14133 -9.29867,12.952 -10.11334,14.09734 -1.17866,1.65333 -2.356,3.308 -3.53466,4.96133" style="fill:#383838;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path38350"/>
    <path d="m 288.54093,56.972275 c -18.13467,-1.744 -46.03467,7.324 -57.544,9.416 -11.508,2.093333 -19.87867,-1.394667 -16.74,-4.882667 3.14,-3.486666 -1.74267,-4.533333 -4.53334,-2.789333 -2.78933,1.744 -0.348,-4.185333 -0.348,-4.185333 l -5.58,3.488 4.88267,-8.021333 -8.37067,6.277333 7.672,-10.462666 c 0,0 -4.94533,2.715999 -9.76533,6.197333 -6.01466,14.825333 -8.45466,31.110666 -7.248,48.412001 0.71067,10.184 6.668,35.02533 8.55067,42.68933 1.17866,-1.65333 2.356,-3.308 3.53466,-4.96133 0.81467,-1.14534 9.888,-14.23867 10.11334,-14.09734 2.7,1.69334 2.92533,5.11067 3.69866,7.89867 0.88934,3.19733 1.83067,6.39333 3.02534,9.49067 -0.0107,-8.076 0.444,-23.84134 3.992,-28.72 5.72,-7.864 16.98666,-25.584002 17.232,-30.009335 0.34,-6.104 19.99733,-15.878667 30.468,-16.46 0.48133,-0.02667 0.984,-0.04 1.504,-0.04 10.51333,0 28.84533,5.477333 34.776,8.444 4.88133,2.44 11.73466,5.548 13.524,6.356 0.32133,-0.144 0.81466,-0.368 1.42933,-0.656 -2.10133,-2.708 -17.43067,-21.764 -34.27333,-23.384" style="opacity:0.199997;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path38360"/>
    <path d="m 212.93119,122.23654 c 0.14267,0.12267 0.27067,0.252 0.37067,0.36667 1.68267,1.94133 3.07467,4.13866 3.92667,6.572 0.348,0.99333 0.62266,2.012 0.89066,3.02933 0.216,0.82267 0.80267,2.02667 0.776,2.86533 0.26667,-8.55733 1.212,-19.004 4.108,-22.98666 6.71067,-9.22534 16.816,-25.649335 17.02667,-29.430669 0.39467,-7.102666 21.372,-16.922666 31.49067,-17.483999 0.50266,-0.028 1.024,-0.04133 1.56533,-0.04133 10.66267,0 29.24933,5.552 35.26,8.557333 4.46667,2.234667 10.652,5.056 13.04,6.137334 8.304,-3.768 18.51733,-9.612 20.62266,-13.996 1.14934,-2.396 1.04534,-5.884 -0.28666,-9.570666 -2.57334,-7.126667 -9.06667,-13.517333 -17.81467,-17.533333 -18.02,-8.272 -47.57066,-16.389333 -59.66133,-16.389333 -0.19067,0 -0.376,0.0027 -0.56,0.0053 -6.52,0.149333 -20.904,3.22 -34.71733,8.621333 -16.10134,6.294667 -26.628,13.82 -29.64267,21.189333 -6.032,14.742666 -8.48,30.958666 -7.27733,48.197327 0.64533,9.24 5.70133,30.87334 7.96133,40.20267 -0.044,-0.176 0.70267,-0.98667 0.80133,-1.12667 1.97867,-2.77733 3.95867,-5.556 5.93734,-8.33333 1.12933,-1.58533 2.17066,-3.41867 3.576,-4.75733 0.51066,-0.48667 0.904,-1.26934 1.128,-1.932 0.22266,-0.66267 -0.26267,-1.35467 -0.0973,-2.00667 0.25067,-0.98933 1.02534,-0.62667 1.576,-0.156 m -13.89999,23.42667 c 0,0 -8.29067,-32.87467 -9.148,-45.16667 -0.85734,-12.291998 -0.28534,-30.301331 7.43333,-49.16933 7.71733,-18.866666 53.74266,-30.873333 66.32,-31.158666 12.57866,-0.286667 43.73733,8.576 61.176,16.579999 17.43733,8.004 22.58266,22.869333 19.15333,30.016 -3.43067,7.146666 -22.584,15.437333 -22.584,15.437333 0,0 -8.29067,-3.717334 -14.008,-6.576 -5.71733,-2.858667 -25.44133,-8.861333 -35.73333,-8.289333 -10.29067,0.572 -29.15734,10.290666 -29.444,15.435999 -0.28534,5.146667 -12.864,24.298668 -17.43734,30.587998 -4.57333,6.28933 -3.716,32.87467 -3.716,32.87467 -2.65866,-3.624 -3.1,-8.44 -4.88666,-12.39334 -0.12667,-0.27866 -0.13467,-0.64933 -0.23067,-0.948 -0.21733,-0.672 -0.36267,-1.39733 -0.5,-2.11333 -0.244,-1.28133 -0.748,-2.296 -1.432,-3.37733 -0.42533,-0.67067 -0.88267,-1.516 -1.57867,-0.64667 -0.35333,0.44133 -0.648,1.028 -0.98533,1.50133 -0.80267,1.128 -1.60667,2.256 -2.41067,3.384 -1.816,2.54934 -3.632,5.09867 -5.448,7.64667 -1.51333,2.12533 -3.02666,4.25067 -4.53999,6.37467" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path38370"/>
</g>`;

class HairCatalog {

    private static _instance: HairCatalog;

    swatches = [
        new Swatch(HairType.Bald, "Bald", (token) => HairCatalog.decorateSwatch("", token.hairColor)),
        new Swatch(HairType.BowlCutHair, "Bowl Cut", (token) => HairCatalog.decorateSwatch(BowlCutHair, token.hairColor)),
        new Swatch(HairType.StylishHair, "Stylish Short", (token) => HairCatalog.decorateSwatch(StylishShortHair, token.hairColor))
    ];

    public static get instance() {
        if (HairCatalog._instance == null) {
            HairCatalog._instance = new HairCatalog();
        }
        return HairCatalog._instance;
    }

    getHair(token: Token) {
        switch (token.hairType) {
            case HairType.Bald:
                return "";
            case HairType.BowlCutHair:
                return BowlCutHair.replace("#383838", token.hairColor);
            case HairType.StylishHair:
                return StylishShortHair.replace("#383838", token.hairColor);
            default:
                return "";
        }
    }

    getSwatches(token: Token) {
        if (token.species === Species.Deltan) {
            return [ this.swatches[0] ];
        } else {
            return this.swatches;
        }
    }

    private static decorateSwatch(svg: string, color: string) {
        let result = `<svg viewBox="0 0 220 220" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g transform="translate(-165, 10)">`
            + svg.replace("#383838", color)
            + `</g>
            </svg>`;
        return result;
    }
}

export default HairCatalog;