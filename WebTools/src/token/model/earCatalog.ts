import { Species } from "../../helpers/speciesEnum";
import SpeciesColors from "./speciesOptions";
import { Token } from "./token";

const HumanEar = `<g xmlns="http://www.w3.org/2000/svg" id="HumanEar">
    <path d="m 215.13853,129.23107 c 0,0 -3.36134,-7.508 -5.37867,-9.076 -2.01733,-1.56933 -6.724,-2.35333 -9.63733,0.112 -2.91333,2.46534 -9.076,10.98134 -8.18,14.56667 0.896,3.58667 5.71467,11.20533 7.732,14.344 2.01733,3.13733 5.82666,11.20533 7.732,13.78267 1.90533,2.57733 3.69733,4.37066 6.612,3.69733 2.91333,-0.672 4.25733,-0.784 5.93866,-2.91333 0.38934,-0.49334 0.28134,-1.47734 0.276,-2.05467 -0.0133,-1.37467 -0.156,-2.75067 -0.30666,-4.11467 -0.0613,-0.56 0.0427,-1.25333 -0.128,-1.788 -0.30534,-0.96 -1.124,-1.72933 -1.672,-2.55866 -0.62134,-0.93734 -1.16,-1.94134 -1.44667,-3.036 -0.44533,-1.69334 -0.264,-3.47867 -0.15467,-5.22667 0.16934,-2.70933 0.15734,-5.43067 -0.0867,-8.13467 -0.124,-1.38266 -0.33334,-2.74666 -0.55867,-4.11466 -0.192,-1.16267 -0.25333,-2.39467 -0.74133,-3.48534" style="fill:#cd976d;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path6713"/>
    <path d="m 214.08613,128.21681 c 0.40933,-4.732 -3.58667,-10.85334 -8.67867,-10.85334 -7.53333,0 -15.444,11.30134 -13.93733,18.45867 1.50667,7.15733 10.548,18.83467 12.43066,24.10933 1.884,5.27334 9.40267,10.01067 12.808,7.53334 2.072,-1.50667 2.82534,-3.57867 2.82534,-3.57867 0,0 -4.144,3.20267 -8.288,0.75333 -4.14267,-2.448 -6.40267,-6.96933 -7.53334,-10.35866 -1.13066,-3.39067 -10.54799,-14.12267 -10.54799,-18.64667 0,-6.592 6.96933,-15.44533 9.98266,-15.25733 2.25733,0.14133 4.66533,0.95333 6.38133,2.46 1.69867,1.49466 2.57334,4.27466 4.55734,5.38" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path6717"/>
    <path d="m 200.57733,127.20321 c 0,0 -4.368,1.62266 -4.992,6.23866 -0.624,4.61734 -0.124,6.864 1.872,9.11067 1.99733,2.24533 1.248,2.24533 4.24266,2.49467 2.99467,0.24933 4.86667,2.12133 5.616,4.86666 0,0 0.49867,-5.61466 3.36934,-7.36133 0,0 0.624,-2.12267 -0.5,-7.36267 -1.12267,-5.24133 -1.996,-6.864 -3.992,-8.112 -1.99734,-1.24666 -5.616,0.12534 -5.616,0.12534" style="opacity:0.199997;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path6727"/>
    <path d="m 195.99026,130.92494 c 0,0 2.448,-5.46267 6.96933,-5.46267 4.52,0 6.968,2.82534 7.15734,6.028 0.188,3.20134 4.14266,10.35867 1.50666,12.05467 -2.63733,1.69467 -4.52,6.78 -3.39066,8.09867 1.13066,1.31866 4.144,4.708 4.144,4.708 0,0 -4.52,-2.636 -6.028,-5.08534 -1.50667,-2.448 0.56533,-7.15733 2.63733,-8.852 2.072,-1.69466 -1.12933,-9.22933 -1.12933,-11.112 0,-1.884 -3.57867,-4.89733 -5.08667,-4.144 -1.50667,0.75334 -6.78,3.76667 -6.78,3.76667" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path6737"/>
    <path d="m 208.60986,130.17161 c 0,0 -4.144,3.39066 -4.332,5.83866 -0.188,2.44934 5.83867,-0.188 5.83867,-0.188 z" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path6741"/>
    <path d="m 202.39426,130.35987 c 0,0 -2.26,4.70934 -2.26,6.404 0,1.69467 0.188,5.83867 0.188,5.83867 0,0 -2.82533,-5.83867 -2.072,-7.53333 0.75334,-1.696 4.144,-4.70934 4.144,-4.70934" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path6745"/>
    <path d="m 209.92826,138.27067 -5.27333,2.82534 c 0,0 6.404,1.31866 6.404,0.75333 0,-0.56533 -0.56534,-3.76667 -0.56534,-3.76667" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path6749"/>
</g>`;

const VulcanEar = `<g xmlns="http://www.w3.org/2000/svg" id="VulcanEar">
    <path d="m 191.94266,134.83387 c 0.58667,3.64934 5.71467,11.20534 7.732,14.34267 2.01733,3.13867 5.82667,11.20667 7.732,13.784 1.90533,2.57733 3.69733,4.36933 6.61067,3.69733 2.91466,-0.672 4.25866,-0.784 5.94,-2.91333 0.724,-0.91733 -0.15467,-2.552 -0.24,-3.60933 -0.10267,-1.25867 -0.63734,-2.61067 -1.24267,-3.70934 -0.76133,-1.38266 -1.69733,-2.312 -2.05867,-3.78533 -0.20666,-0.844 -0.412,-1.89067 -0.408,-2.75733 0.004,-1.128 0.56934,-2.236 0.68934,-3.36267 0.208,-1.94933 0.48933,-3.90133 0.45333,-5.86533 -0.036,-1.85067 -0.51733,-3.656 -0.86,-5.47067 -0.34133,-1.81067 -0.392,-4.256 -1.152,-5.95333 0,-0.001 -3.36133,-7.508 -5.37867,-9.07734 0,0 -11.19599,-9.64933 -11.54533,-12.264 -0.348,-2.616 -1.56933,0 -2.61466,0.95867 -1.04667,0.95867 -3.13867,7.672 -3.66267,14.73467 -0.52267,7.06266 -0.51333,8.028 0.005,11.25066" style="fill:#cd976d;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path12667"/>
    <path d="m 211.35653,141.25401 c 0.36,-1.38134 0.12933,-2.88267 -0.13734,-4.316 -0.412,-2.20667 -0.38,-4.504 -1.78266,-6.392 -2.12134,-2.856 -11.58533,-11.17734 -11.748,-15.01067 -0.16267,-3.83467 -1.14267,-1.71333 -1.71333,0.81467 -0.57067,2.52933 -1.876,10.03466 -0.73467,14.52266 1.14267,4.48667 4.488,9.3 4.81333,10.36 0.32667,1.06134 1.224,4.65067 3.59067,2.69334 1.084,-0.89734 2.32533,-1.62934 3.58266,-2.25334 0.43334,-0.21466 3.04667,-1.17333 1.92267,0.20934 -0.46667,0.57333 -0.95467,1.11333 -1.43067,1.68133 -0.95066,1.132 -1.956,2.136 -2.93333,3.25867 -1.00933,1.16266 -2.06,2.34933 -1.512,4 0.49467,1.488 1.68533,1.80533 2.90133,2.60533 1.308,0.86 2.89334,1.096 4.20934,1.68133 -1.18934,-1.07333 -2.46,-2.25733 -3.09467,-3.76266 -0.644,-1.528 -0.356,-2.76534 0.10667,-4.28 0.49066,-1.60267 2.02133,-2.74267 3.08,-4.05867 0.44266,-0.54933 0.72,-1.13867 0.88,-1.75333" style="opacity:0.199997;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path12677"/>
    <path d="m 203.31773,153.79707 c 0,0 9.34533,12.59067 16.216,10.08934 0,0 -2.51067,3.53466 -5.44667,3.372 -2.93733,-0.164 -8.24,-3.672 -9.21867,-6.93467 -0.98,-3.264 -1.55066,-6.52667 -1.55066,-6.52667" style="opacity:0.199997;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path12693"/>
    <path d="m 207.85639,131.30161 c 0.616,1.78 3.20134,9.41733 1.13067,11.11333 -2.072,1.69467 -4.144,6.40267 -2.63733,8.852 1.50666,2.448 6.02666,5.08533 6.02666,5.08533 0,0 -3.01333,-3.39066 -4.14266,-4.70933 -1.13067,-1.31733 0.75333,-6.404 3.38933,-8.09867 2.63733,-1.69466 -0.70267,-8.94933 -1.50667,-12.05466 -0.828,-3.19867 -3.18266,-4.85467 -5.71066,-7.64534 -2.52934,-2.78933 -5.58,-4.96933 -6.27733,-8.71866 -0.69734,-3.74934 -1.29334,-0.204 -0.78534,1.744 1.56934,6.016 9.08133,10.29333 10.51333,14.432" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path12703"/>
    <path d="m 208.60986,130.17161 c 0,0 -4.144,3.39066 -4.332,5.83866 -0.188,2.44934 5.83867,-0.188 5.83867,-0.188 z" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path12707"/>
    <path d="m 202.39426,130.35987 c 0,0 -2.26,4.70934 -2.26,6.404 0,1.69467 0.188,5.83867 0.188,5.83867 0,0 -2.82533,-5.83867 -2.072,-7.53333 0.75334,-1.696 4.144,-4.70934 4.144,-4.70934" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path12711"/>
    <path d="m 209.92826,138.27067 -5.27333,2.82534 c 0,0 6.404,1.31866 6.404,0.75333 0,-0.56533 -0.56534,-3.76667 -0.56534,-3.76667" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path12715"/>
    <path d="m 191.46986,135.82201 c 1.24667,6.87333 10.548,18.83466 12.43067,24.10933 1.884,5.27333 9.40266,10.01067 12.808,7.53333 2.072,-1.50666 2.82533,-3.57866 2.82533,-3.57866 0,0 -4.144,3.20266 -8.28667,0.75333 -4.144,-2.448 -6.404,-6.968 -7.53466,-10.35867 -1.12934,-3.39066 -10.548,-14.12266 -10.548,-18.64666 0,0 -1.58,-16 2.13333,-24.54667 2.83067,-6.51067 2.86,-0.33467 4.836,2.38267 1.97467,2.716 9.39467,9.36666 9.39467,9.36666 1.69866,1.49467 3.66933,4.56 5.65333,5.66534 2.10667,3.00933 1.848,-2.844 -2.25067,-6.26534 -4.09866,-3.42133 -9.97733,-9.42133 -11.95333,-12.87866 -1.97466,-3.45734 -1.97466,-7.90134 -6.17333,-1.48134 -4.19867,6.42134 -4.58133,21.072 -3.33467,27.94534" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path12719"/>
    <path d="m 198.91266,119.65974 c 0,0 -2.528,3.31333 -2.092,7.41067 0,0 2.092,-7.06134 3.748,-5.40534 1.65733,1.656 -1.656,-2.00533 -1.656,-2.00533" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path12723"/>
</g>`;

const DenobulanEar = `<g xmlns="http://www.w3.org/2000/svg" id="g289399" inkscape:groupmode="layer" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:label="Page 1" style="display:inline">
    <path d="m 215.13853,129.23107 c 0,0 -3.36134,-7.508 -5.37867,-9.076 -2.01733,-1.56933 -6.724,-2.35333 -9.63733,0.112 -2.91333,2.46534 -9.076,10.98134 -8.18,14.56667 0.896,3.58667 5.71467,11.20533 7.732,14.344 2.01733,3.13733 5.82666,11.20533 7.732,13.78267 1.292,1.74933 2.88933,4.04666 5.324,3.10266 2.16533,-0.83866 4.43466,-4.268 4.42133,-6.53066 -0.0187,-2.92134 -2.78267,-5.264 -2.87733,-8.18267 -0.0773,-2.42133 1.59733,-4.31733 2.25066,-6.536 0.74534,-2.53067 0.14667,-5.4 -0.0867,-7.98267 -0.124,-1.38266 -0.33334,-2.74666 -0.55867,-4.11466 -0.192,-1.16267 -0.25333,-2.39467 -0.74133,-3.48534" style="fill:#cd976d;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path292911"/>
    <path d="m 193.16506,135.63361 c 0,-6.592 6.968,-15.444 9.98267,-15.256 2.256,0.14 4.66533,0.952 6.38,2.46 1.7,1.49333 2.57466,4.27466 4.55866,5.37866 0.40934,-4.73066 -3.58666,-10.852 -8.67866,-10.852 -7.53333,0 -15.444,11.3 -13.93733,18.45734 1.50666,7.15733 10.54666,18.836 12.43066,24.11066 1.37067,3.83467 4.71733,6.416 8.388,7.84934 1.42933,0.55733 5.94,2.708 6.13067,-0.19067 -1.25734,-0.67067 -2.74667,-1.152 -4.064,-1.82 -1.056,-0.536 -3.25734,-0.99333 -3.87067,-1.97467 0.95067,0.436 1.776,0.67067 2.91067,0.62267 0.65733,-0.028 2.904,-0.356 3.06933,-1.012 -1.75867,-0.42267 -3.37733,-0.32667 -5.268,-0.54533 -1.092,-0.12667 -4.42133,-0.81867 -4.30133,-2.31334 1.156,0.884 1.93866,0.992 3.344,0.99734 0.92933,0.004 3.12266,0.38666 3.74266,-0.0907 -1.84533,-1.07867 -4.12,-1.31333 -5.832,-2.68133 -1.35733,-1.08267 -2.884,-1.716 -3.812,-3.216 1.688,1.33466 3.27734,1.22666 5.256,1.784 0.0413,0.0547 0.04,0.0573 -0.004,0.009 -1.58133,-1.71067 -3.82133,-2.64 -5.644,-4.04667 -1.88533,-1.45733 -2.916,-3.55866 -4.25333,-5.488 -2.26533,-3.26666 -6.528,-7.95066 -6.528,-12.18266" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path292963"/>
    <path d="m 200.57733,127.20321 c 0,0 -4.368,1.62266 -4.992,6.23866 -0.624,4.61734 -0.124,6.864 1.872,9.11067 1.99733,2.24533 1.248,2.24533 4.24266,2.49467 2.99467,0.24933 4.86667,2.12133 5.616,4.86666 0,0 0.49867,-5.61466 3.36934,-7.36133 0,0 0.624,-2.12267 -0.5,-7.36267 -1.12267,-5.24133 -1.996,-6.864 -3.992,-8.112 -1.99734,-1.24666 -5.616,0.12534 -5.616,0.12534" style="opacity:0.199997;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path292973"/>
    <path d="m 195.99026,130.92494 c 0,0 2.448,-5.46267 6.96933,-5.46267 4.52,0 6.968,2.82534 7.15734,6.028 0.188,3.20134 4.14266,10.35867 1.50666,12.05467 -2.63733,1.69467 -4.52,6.78 -3.39066,8.09867 1.13066,1.31866 4.144,4.708 4.144,4.708 0,0 -4.52,-2.636 -6.028,-5.08534 -1.50667,-2.448 0.56533,-7.15733 2.63733,-8.852 2.072,-1.69466 -1.12933,-9.22933 -1.12933,-11.112 0,-1.884 -3.57867,-4.89733 -5.08667,-4.144 -1.50667,0.75334 -6.78,3.76667 -6.78,3.76667" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path292983"/>
    <path d="m 208.60986,130.17161 c 0,0 -4.144,3.39066 -4.332,5.83866 -0.188,2.44934 5.83867,-0.188 5.83867,-0.188 z" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path292987"/>
    <path d="m 202.39426,130.35987 c 0,0 -2.26,4.70934 -2.26,6.404 0,1.69467 0.188,5.83867 0.188,5.83867 0,0 -2.82533,-5.83867 -2.072,-7.53333 0.75334,-1.696 4.144,-4.70934 4.144,-4.70934" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path292991"/>
    <path d="m 209.92826,138.27067 -5.27333,2.82534 c 0,0 6.404,1.31866 6.404,0.75333 0,-0.56533 -0.56534,-3.76667 -0.56534,-3.76667" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path292995"/>
</g>`;

class EarCatalog {

    private static _instance: EarCatalog;

    public static get instance() {
        if (EarCatalog._instance == null) {
            EarCatalog._instance = new EarCatalog();
        }
        return EarCatalog._instance;
    }

    getEar(token: Token) {
        if (token.species === Species.Vulcan) {
            return VulcanEar.replace(SpeciesColors.DEFAULT_SKIN_COLOR, token.skinColor);
        } else if (token.species === Species.Denobulan) {
            return DenobulanEar.replace(SpeciesColors.DEFAULT_SKIN_COLOR, token.skinColor);
        } else {
            return HumanEar.replace(SpeciesColors.DEFAULT_SKIN_COLOR, token.skinColor);
        }
    }

}

export default EarCatalog;