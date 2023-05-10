import { MouthType } from "./mouthTypeEnum";
import Swatch from "./swatch";
import { Token } from "./token";

const ThinLip = `<g xmlns="http://www.w3.org/2000/svg" >
    <path d="m 310.89893,203.1216 c 3.44,0.45867 10.964,-0.32 13.852,-2.224 2.888,-1.90399 0.208,-0.504 0,0 -0.208,0.504 -0.0933,7.384 -10.18267,7.04 -10.09067,-0.344 -18.116,-8.14133 -18.116,-8.14133 0,0 11.00667,2.86667 14.44667,3.32533" style="opacity:0.199997;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path9769"/>
    <path d="m 329.83786,194.59774 c 0,0 -8.276,-2.712 -9.308,-3.744 -1.032,-1.032 -2.29333,0.11467 -5.84667,-0.11467 -3.55466,-0.22933 -5.61866,-0.57333 -6.76533,-0.11466 -1.14667,0.45866 -16.74,3.78266 -20.29467,4.356 0,0 13.988,0.57333 14.676,0.344 0.688,-0.22934 6.07734,-1.49067 7.912,-1.26134 1.83467,0.22934 5.38934,0.688 6.87867,0.344 1.49067,-0.344 3.66933,-1.03066 3.66933,-1.03066 0,0 7.264,1.64133 9.07867,1.22133" style="opacity:0.199997;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path9785"/>
    <path d="m 303.13066,201.4884 c 0,0 5.72267,1.18134 12.29333,0.788 6.57067,-0.39466 9.32667,-1.37866 9.32667,-1.37866 0,0 -4.02667,3.74133 -9.32667,3.74133 -5.29866,0 -12.29333,-3.15067 -12.29333,-3.15067" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path9795"/>
    <path d="m 322.92973,193.37801 c -1.06534,-0.26934 -1.74267,-0.764 -2.904,-0.54 -1.16267,0.22533 -7.21334,0.58533 -8.52,0.40533 -1.30667,-0.18 -6.584,0.584 -8.37467,1.21333 -1.09867,0.38667 -2.46533,0.32 -3.61067,0.37334 -2.89733,0.13333 -5.8,0.148 -8.7,0.20533 -0.65866,0.0133 -1.372,0.0107 -1.9,-0.38267 -0.50933,-0.37733 -0.676,-1.00266 -1.04533,-1.49066 -0.13333,-0.176 -0.32,-0.34534 -0.54133,-0.34 -0.15867,0.003 -0.29867,0.0947 -0.42534,0.188 -0.92533,0.67733 -1.66933,1.6 -2.136,2.648 0.048,-0.10934 1.40534,-0.064 1.576,-0.072 2.668,-0.108 5.33867,-0.076 8.00534,0.048 2.55333,0.12 5.096,0.44533 7.64933,0.12933 0.59067,-0.0733 1.17867,-0.176 1.75733,-0.31733 4.028,-0.984 7.21334,0.136 12.088,0.136 3.18,0 4.23867,-1.772 6.78267,-1.18134 2.544,0.59067 7.20667,0.19734 7.20667,0.19734 0,0 -5.84267,-0.95067 -6.908,-1.22" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path9799"/>
    <path d="m 313.49186,179.92254 c 0,0 -1.56,6.324 -0.65733,7.96667 0.904,1.64133 2.54666,1.724 2.54666,1.724 0,0 -2.05333,-1.88934 -1.80666,-4.10667 0.24533,-2.21733 -0.0827,-5.584 -0.0827,-5.584" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path9803"/>
</g>`;

const MediumLip = `<g id="g100632">
    <path d="m 310.89893,203.72174 c 3.44,0.49466 10.964,-0.92 13.852,-2.824 2.888,-1.904 0.208,-0.504 0,0 -0.208,0.504 -0.0933,8.396 -10.18267,8.024 -10.09067,-0.372 -18.116,-9.12533 -18.116,-9.12533 0,0 11.00667,3.43066 14.44667,3.92533" style="opacity:0.199997;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path103606"/>
    <path d="m 329.83786,194.59774 c 0,0 -5.94533,-3.76933 -7.17867,-4.70933 -1.23333,-0.94134 -2.27066,0.104 -5.86933,-0.10534 -3.6,-0.20933 -5.73067,-0.52266 -6.788,-0.104 -1.056,0.41734 -18.824,4.728 -22.37867,5.30134 0,0 13.988,0.57333 14.676,0.344 0.688,-0.22934 6.07734,-1.49067 7.912,-1.26134 1.83467,0.22934 5.38934,0.688 6.87867,0.344 1.49067,-0.344 3.66933,-1.03066 3.66933,-1.03066 0,0 7.264,1.64133 9.07867,1.22133" style="opacity:0.199997;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path103622"/>
    <path d="m 303.05053,201.64867 c 0,0 5.72266,1.74533 12.29333,1.32 6.57067,-0.42533 9.32667,-1.91067 9.32667,-1.91067 0,0 -4.02667,4.46134 -9.32667,4.46134 -5.29867,0 -12.29333,-3.87067 -12.29333,-3.87067" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path103632"/>
    <path d="m 322.92973,193.37801 c -1.06534,-0.26934 -1.74267,-0.764 -2.904,-0.54 -1.16267,0.22533 -7.21334,0.58533 -8.52,0.40533 -1.30667,-0.18 -6.584,0.584 -8.37467,1.21333 -1.09867,0.38667 -2.46533,0.32 -3.61067,0.37334 -2.89733,0.13333 -5.8,0.148 -8.7,0.20533 -0.65866,0.0133 -1.372,0.0107 -1.9,-0.38267 -0.50933,-0.37733 -0.676,-1.00266 -1.04533,-1.49066 -0.13333,-0.176 -0.32,-0.34534 -0.54133,-0.34 -0.15867,0.003 -0.29867,0.0947 -0.42534,0.188 -0.92533,0.67733 -1.66933,1.6 -2.136,2.648 0.048,-0.10934 1.40534,-0.064 1.576,-0.072 2.668,-0.108 5.33867,-0.076 8.00534,0.048 2.55333,0.12 5.096,0.44533 7.64933,0.12933 0.59067,-0.0733 1.17867,-0.176 1.75733,-0.31733 4.028,-0.984 7.21334,0.136 12.088,0.136 3.18,0 4.23867,-1.772 6.78267,-1.18134 2.544,0.59067 7.20667,0.19734 7.20667,0.19734 0,0 -5.84267,-0.95067 -6.908,-1.22" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path103636"/>
    <path d="m 313.49186,179.92254 c 0,0 -1.56,5.76533 -0.65733,7.26267 0.904,1.49733 2.54666,1.572 2.54666,1.572 0,0 -2.05333,-1.72134 -1.80666,-3.744 0.24533,-2.02134 -0.0827,-5.09067 -0.0827,-5.09067" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path103640"/>
</g>`;

const MediumLip2 = `<g id="g105220">
    <path d="m 310.89893,203.72174 c 3.44,0.49466 10.964,-0.92 13.852,-2.824 2.888,-1.904 0.208,-0.504 0,0 -0.208,0.504 -0.0933,8.396 -10.18267,8.024 -10.09067,-0.372 -18.116,-9.12533 -18.116,-9.12533 0,0 11.00667,3.43066 14.44667,3.92533" style="opacity:0.199997;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path108142"/>
    <path d="m 329.83786,194.59774 c 0,0 -5.94533,-3.76933 -7.17867,-4.70933 -1.23333,-0.94134 -2.27066,0.104 -5.86933,-0.10534 -3.6,-0.20933 -5.73067,-0.52266 -6.788,-0.104 -2.264,0.896 -4.87067,1.348 -7.24133,1.976 -1.95067,0.51734 -3.90267,1.02534 -5.85734,1.52667 -1.86666,0.47733 -4.17466,0.616 -5.80533,1.708 -0.596,0.39867 -1.62267,0.90267 -2.01067,1.51333 0.44,-0.69466 2.904,-0.90533 3.62,-0.91333 1.352,-0.016 2.71334,0.0453 4.06667,0.0507 1.57867,0.005 3.968,0.43333 5.49867,-0.108 0.692,-0.244 6.104,-1.59867 7.93866,-1.36934 1.83467,0.22934 5.38934,0.688 6.87867,0.344 1.49067,-0.344 3.66933,-1.03066 3.66933,-1.03066 0,0 7.264,1.64133 9.07867,1.22133" style="opacity:0.199997;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path108158"/>
    <path d="m 303.05053,201.64867 c 0,0 5.72266,1.74533 12.29333,1.32 6.57067,-0.42533 9.32667,-1.91067 9.32667,-1.91067 0,0 -4.02667,4.46134 -9.32667,4.46134 -5.29867,0 -12.29333,-3.87067 -12.29333,-3.87067" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path108168"/>
    <path d="m 322.92973,193.37801 c -1.06534,-0.26934 -1.74267,-0.764 -2.904,-0.54 -1.16267,0.22533 -7.21334,0.58533 -8.52,0.40533 -1.30667,-0.18 -6.59734,0.63867 -8.39734,1.30667 -1.10533,0.41066 -2.48,0.376 -3.632,0.456 -2.1,0.14666 -4.20133,0.22933 -6.30133,0.31333 -1.85733,0.0733 -3.32933,-0.25067 -4.85867,0.884 -0.41466,0.308 -1.32533,1.07067 -1.29866,1.632 0.42,0.18533 0.904,0.0267 1.32666,-0.15333 0.68667,-0.292 1.22667,-0.85734 1.908,-1.12134 1.304,-0.50666 2.65734,-0.66266 4.02667,-0.632 2.57067,0.0587 5.128,0.32134 7.696,-0.0533 0.59467,-0.0867 1.18533,-0.20267 1.768,-0.35733 4.04933,-1.07334 7.23067,0.064 12.10533,0.064 3.18,0 4.23867,-1.772 6.78267,-1.18134 1.16,0.26934 2.376,0.312 3.56267,0.324 1.93466,0.0187 1.872,1.82667 0.98133,3.18534 0.24933,-0.28267 2.68,-3.48667 2.70133,-3.47867 -1.10666,-0.408 -2.676,-0.26933 -3.86,-0.47333 -1.028,-0.17867 -2.07466,-0.324 -3.08666,-0.58" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path108172"/>
    <path d="m 313.49186,179.92254 c 0,0 -1.56,5.76533 -0.65733,7.26267 0.904,1.49733 2.54666,1.572 2.54666,1.572 0,0 -2.05333,-1.72134 -1.80666,-3.744 0.24533,-2.02134 -0.0827,-5.09067 -0.0827,-5.09067" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path108176"/>
</g>`;

const FullerLip = `<g id="g154265">
<path d="m 310.87226,202.80627 c 3.46267,0.49467 11.03867,-0.92 13.94667,-2.824 2.90666,-1.904 0.208,-0.504 0,0 -0.20934,0.504 -0.0947,8.396 -10.25334,8.024 -10.15733,-0.372 -18.23866,-9.12533 -18.23866,-9.12533 0,0 11.08266,3.43066 14.54533,3.92533" style="opacity:0.199997;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path157135"/>
<path d="m 327.69359,194.59774 c 0,0 -5.096,-4.62133 -6.15333,-5.488 -1.05733,-0.868 -1.94533,0.096 -5.03067,-0.096 -3.08533,-0.19333 -4.912,-0.48267 -5.81733,-0.0973 -0.90667,0.38533 -16.136,5.49066 -19.18267,6.064 0,0 11.99067,0.57333 12.58,0.344 0.58934,-0.22934 5.208,-1.49067 6.78134,-1.26134 1.572,0.22934 4.61866,0.688 5.896,0.344 1.27733,-0.344 3.14533,-1.03066 3.14533,-1.03066 0,0 6.22667,1.64133 7.78133,1.22133" style="opacity:0.199997;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path157151"/>
<path d="m 302.97039,200.7332 c 0,0 5.76134,1.74534 12.37734,1.32 6.616,-0.42533 9.38933,-1.91066 9.38933,-1.91066 0,0 -4.05467,4.46133 -9.38933,4.46133 -5.33467,0 -12.37734,-3.87067 -12.37734,-3.87067" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path157161"/>
<path d="m 321.77226,193.37801 c -0.91333,-0.26934 -1.49333,-0.764 -2.48933,-0.54 -0.996,0.22533 -6.18267,0.58533 -7.30267,0.40533 -1.12,-0.18 -5.64267,0.584 -7.17867,1.21333 -0.94133,0.38667 -2.112,0.32 -3.09466,0.37334 -1.37334,0.0733 -2.748,0.11066 -4.12267,0.14 -1.284,0.0267 -2.608,0.15733 -3.888,0.028 -0.77067,-0.0787 -1.72133,-0.26 -2.35333,-0.74267 -0.704,-0.53733 -0.31467,-1.224 -0.34267,-1.97333 0.003,0.0653 -0.96133,1.172 -1.07867,1.31866 -0.51466,0.63734 -1.02933,1.544 -1.09733,2.37467 -0.0533,0.668 0.96,0.484 1.34,0.38133 2.156,-0.58666 4.46667,-0.848 6.728,-0.776 2.33333,0.0733 4.60267,0.52134 6.94267,0.18267 0.50666,-0.0733 1.01066,-0.176 1.50666,-0.31733 3.452,-0.984 6.18267,0.136 10.36134,0.136 2.72533,0 3.63333,-1.772 5.81333,-1.18134 1.16267,0.31467 2.41733,0.33867 3.61467,0.324 0.472,-0.005 1.02266,-0.22133 1.46,-0.044 0.208,0.0853 1.11466,0.936 0.91866,1.20667 0.25467,-0.35333 0.18,-0.71867 0.156,-1.11733 -0.0107,-0.19467 -0.16533,-0.85067 -0.10533,-0.99467 -0.0267,0.0653 -0.048,0.088 -0.0587,0.168 -0.312,0.13467 -0.412,0.27067 -0.748,0.31733 -0.30666,0.0427 -0.64266,0.0307 -0.94666,-0.028 -0.53467,-0.1 -1.068,-0.20933 -1.60267,-0.31866 -0.80933,-0.164 -1.63867,-0.30134 -2.432,-0.536" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path157165"/>
<path d="m 313.49186,179.92254 c 0,0 -1.56,5.31467 -0.65733,6.696 0.904,1.38 2.54666,1.44933 2.54666,1.44933 0,0 -2.05333,-1.588 -1.80666,-3.452 0.24533,-1.864 -0.0827,-4.69333 -0.0827,-4.69333" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path157169"/>
</g>`;

const FullerLip2 = `<g id="g132278">
    <path d="m 310.35666,204.82454 c 4.14533,0.528 13.21067,-0.98 16.69067,-3.008 3.48,-2.02667 0.25066,-0.536 0,0 -0.24934,0.53733 -0.112,8.94133 -12.26934,8.54533 -12.15866,-0.39467 -21.82933,-9.71733 -21.82933,-9.71733 0,0 13.26267,3.652 17.408,4.18" style="opacity:0.199997;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path135096"/>
    <path d="m 330.48879,195.55081 c 0,0 -5.09333,-5.64267 -6.44533,-6.504 -1.352,-0.86134 -2.32,0.096 -6.03067,-0.096 -3.712,-0.19067 -5.92666,-0.47867 -6.972,-0.096 -1.04666,0.384 -20.21066,6.49333 -23.85733,7.104 0,0 14.34933,0.61066 15.056,0.36666 0.70533,-0.244 6.23333,-1.588 8.11467,-1.344 1.88266,0.24534 5.52933,0.73334 7.05733,0.36667 1.52933,-0.36667 3.764,-1.09867 3.764,-1.09867 0,0 7.452,1.748 9.31333,1.30134" style="opacity:0.199997;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path135112"/>
    <path d="m 300.89959,202.6168 c 1.412,0.69067 3.54134,0.752 5.064,0.964 1.54667,0.21334 3.12134,0.356 4.684,0.36534 1.712,0.012 3.41067,-0.29734 5.12267,-0.27467 2.43467,0.032 5.22267,0.528 7.52133,-0.51733 1.256,-0.57067 2.64667,-0.67467 3.88534,-1.30534 -0.21067,0.108 -0.56,0.97867 -0.82934,1.212 -1.76266,1.52934 -3.37066,2.608 -5.71733,2.98534 -1.48133,0.23866 -2.81467,-0.0493 -4.3,0.11333 -1.64133,0.17867 -3.28267,0.57467 -4.94133,0.37867 -2.43334,-0.288 -4.744,-1.11467 -6.892,-2.276 -1.13734,-0.61467 -2.42534,-1.072 -3.59734,-1.64534" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path135122"/>
    <path d="m 323.41466,194.18667 c -0.72533,-0.14 -1.448,-0.23066 -2.14,-0.192 -0.63733,0.0347 -1.21067,0.25067 -1.79733,0.33867 -2.568,0.38267 -5.24534,0.13867 -7.79467,-0.22533 -1.34133,-0.19067 -6.75333,0.62266 -8.59067,1.29333 -1.128,0.41067 -2.52933,0.34 -3.704,0.396 -1.644,0.08 -3.28933,0.11867 -4.93333,0.14933 -1.53733,0.0293 -3.12133,0.168 -4.65467,0.0293 -0.92266,-0.0827 -2.06,-0.276 -2.816,-0.79067 -0.84266,-0.572 -0.37733,-1.30267 -0.41066,-2.10133 0.003,0.0693 -1.15067,1.24933 -1.292,1.40533 -0.61467,0.67733 -1.23067,1.644 -1.312,2.52933 -0.064,0.71067 1.14933,0.51467 1.604,0.40534 2.58,-0.62534 5.34533,-0.904 8.052,-0.82667 2.792,0.0787 5.508,0.55467 8.30933,0.19467 0.60533,-0.0773 1.20933,-0.18667 1.80267,-0.33734 2.40933,-0.612 4.852,-0.42933 7.29733,-0.18533 1.196,0.12 2.4,0.14267 3.51867,0.51067 0.996,0.32666 2.24533,0.40933 3.24,0.0227 1.18666,-0.46266 2.252,-0.94533 3.50933,-1.22666 2.03733,-0.45734 4.02667,0.132 6.11867,0.11066 0.56533,-0.007 1.224,-0.23733 1.748,-0.0467 0.24933,0.0893 1.33333,0.99466 1.09866,1.28533 0.30534,-0.37733 0.216,-0.76667 0.188,-1.192 -0.0133,-0.20667 -0.19866,-0.90533 -0.12666,-1.05733 -0.032,0.068 -0.0573,0.092 -0.0693,0.17866 -0.37466,0.14267 -0.49333,0.28667 -0.896,0.33734 -0.36666,0.0453 -0.76933,0.032 -1.13333,-0.0293 -0.64,-0.108 -1.27867,-0.224 -1.91733,-0.34 -0.92267,-0.16533 -1.912,-0.44533 -2.89867,-0.636" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path135126"/>
    <path d="m 313.49186,179.92254 c 0,0 -1.336,5.27867 -0.116,6.64933 1.21867,1.37067 3.192,1.44 3.192,1.44 0,0 -2.616,-1.57733 -2.508,-3.428 0.108,-1.85066 -0.568,-4.66133 -0.568,-4.66133" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path135130"/>
</g>`;

const FullerLip3 = `<g id="g137602">
    <path d="m 310.35666,205.87067 c -1.95467,-0.248 -5.424,-0.768 -9.45733,-2.44133 -3.91067,-1.62267 -7.95067,-1.73867 -7.95067,-1.73867 0,0 9.67067,9.32267 21.82933,9.71733 12.15734,0.396 12.02,-8.008 12.26934,-8.544 -3.48,2.02667 -12.54534,3.53467 -16.69067,3.00667" style="opacity:0.199997;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path140356"/>
    <path d="m 329.14706,195.40027 c -1.77333,0.48667 -5.976,-0.91733 -5.976,-0.91733 0,0 -4.11467,0.46533 -5.96533,0.864 -1.84934,0.39867 -6.26,-0.13333 -8.53734,-0.39867 -2.276,-0.26666 -5.52266,1.19734 -6.19466,1.46267 -0.67334,0.26667 -16.41867,-0.17733 -16.41867,-0.17733 0,0 1.188,-0.71734 3.26,-1.73867 4.28667,-2.112 12.36,-5.52267 21.54667,-6.56933 1.07333,-0.12267 3.62533,0.164 7.16266,0.37333 3.536,0.208 3.75867,-0.77867 5.22934,-0.16533 3.556,1.48533 5.65066,5.02533 6.14266,7.43333" style="opacity:0.199997;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path140384"/>
    <path d="m 300.89959,203.4296 c 1.412,0.844 3.54134,0.91867 5.064,1.176 1.54667,0.26267 3.12134,0.436 4.684,0.448 1.712,0.0133 3.41067,-0.364 5.12267,-0.336 2.43467,0.04 5.22267,0.644 7.52133,-0.632 1.256,-0.69733 2.80934,-0.784 4.048,-1.55466 -0.21066,0.13066 -0.72266,1.156 -0.992,1.44 -1.76266,1.868 -3.37066,3.18533 -5.71733,3.64666 -1.48133,0.292 -2.81467,-0.06 -4.3,0.13867 -1.64133,0.21867 -3.28267,0.70267 -4.94133,0.46267 -2.43334,-0.352 -4.744,-1.36134 -6.892,-2.78 -1.13734,-0.75067 -2.42534,-1.30934 -3.59734,-2.00934" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path140394"/>
    <path d="m 322.65413,194.08161 c -0.69067,-0.152 0.0627,-0.252 -0.77467,-0.20934 -0.772,0.0387 -1.656,0.716 -2.36533,0.812 -3.108,0.41734 -5.60267,-0.432 -8.688,-0.828 -1.62267,-0.20933 -5.78934,0.81867 -7.54,1.548 -1.07467,0.448 -2.40934,0.37067 -3.53067,0.432 -1.56533,0.0867 -3.13333,0.12934 -4.70133,0.16267 -1.464,0.032 -2.97467,0.18267 -4.43467,0.032 -0.88,-0.0893 -1.964,-0.3 -2.68533,-0.86133 -0.80267,-0.62267 -0.35867,-1.42 -0.39067,-2.288 0.003,0.0747 -1.096,1.35866 -1.23067,1.52933 -0.58533,0.73867 -1.17333,1.792 -1.25066,2.75467 -0.0613,0.77466 1.096,0.56133 1.528,0.44133 2.46,-0.68 5.09466,-0.98267 7.67466,-0.9 2.66,0.0867 5.24934,0.60533 7.91867,0.21333 0.57733,-0.0853 1.152,-0.204 1.71733,-0.368 2.29734,-0.66666 2.744,-0.88933 5.70134,-0.62266 1.44666,0.13066 4.08666,0.38533 5.44133,0.78666 1.20533,0.356 2.716,0.44667 3.91867,0.024 1.436,-0.50266 1.43066,-0.83866 2.95066,-1.14533 2.464,-0.49733 2.56534,0.144 4.56,0.12 0.53867,-0.007 1.16667,-0.25733 1.66534,-0.0507 0.23733,0.0987 1.27066,1.084 1.048,1.4 0.29066,-0.41066 0.20533,-0.83466 0.17866,-1.29733 -0.0133,-0.22533 -0.18933,-0.98667 -0.12133,-1.15333 -0.0307,0.0747 -0.0547,0.10133 -0.0653,0.19466 -0.35734,0.156 -0.47067,0.31334 -0.85334,0.368 -0.35066,0.0493 -0.73466,0.0347 -1.08,-0.032 -0.61066,-0.11733 -1.22,-0.244 -1.828,-0.36933 -0.87866,-0.18133 -1.82266,-0.48667 -2.76266,-0.69333" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path140398"/>
    <path d="m 313.49186,179.79227 c 0,0 -2.62933,4.99067 -1.41067,6.21734 1.22,1.22666 4.48667,1.02 4.48667,1.02 0,0 -2.616,-1.41067 -2.508,-3.06667 0.108,-1.656 -0.568,-4.17067 -0.568,-4.17067" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.33333" id="path140402"/>
</g>`;

class MouthCatalog {

    private static _instance: MouthCatalog;

    swatches = [
        new Swatch(MouthType.Mouth1, "Thin Lip", MouthCatalog.decorateSwatch(ThinLip)),
        new Swatch(MouthType.Mouth2, "Medium Lip", MouthCatalog.decorateSwatch(MediumLip)),
        new Swatch(MouthType.Mouth3, "Medium Lip Frowning", MouthCatalog.decorateSwatch(MediumLip2)),
        new Swatch(MouthType.Mouth4, "Fuller Lip", MouthCatalog.decorateSwatch(FullerLip)),
        new Swatch(MouthType.Mouth5, "Fairly Full Lip", MouthCatalog.decorateSwatch(FullerLip2)),
        new Swatch(MouthType.Mouth6, "Broad, Full Lip", MouthCatalog.decorateSwatch(FullerLip3)),
    ];

    public static get instance() {
        if (MouthCatalog._instance == null) {
            MouthCatalog._instance = new MouthCatalog();
        }
        return MouthCatalog._instance;
    }

    getMouth(token: Token) {
        if (token.mouthType === MouthType.Mouth2) {
            return MediumLip;
        } else if (token.mouthType === MouthType.Mouth3) {
            return MediumLip2;
        } else if (token.mouthType === MouthType.Mouth4) {
            return FullerLip;
        } else if (token.mouthType === MouthType.Mouth5) {
            return FullerLip2;
        } else if (token.mouthType === MouthType.Mouth6) {
            return FullerLip3;
        } else {
            return ThinLip;
        }
    }

    private static decorateSwatch(svg: string) {
        let result = `<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g transform="translate(-255, -140)">`
            + svg
            + `</g>
            </svg>`;
        return result;
    }
}

export default MouthCatalog;