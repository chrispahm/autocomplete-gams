'use babel'

export default [
  {
    'name': 'abs',
    'displayText': 'abs(x)',
    'snippet': 'abs(${1:x})',
    'rightLabelHTML': '<span>Absolute value of the argument <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x.</span>',
    'modelType': 'DNLP',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'arccos',
    'displayText': 'arccos(x)',
    'snippet': 'arccos(${1:x})',
    'rightLabelHTML': '<span>Inverse cosine of the argument <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x, where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x is a real number between -1 and 1 and the output is in radians, see MathWorld</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'arcsin',
    'displayText': 'arcsin(x)',
    'snippet': 'arcsin(${1:x})',
    'rightLabelHTML': '<span>Inverse sine of the argument <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x, where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x is a real number between -1 and 1 and the output is in radians, see MathWorld</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'arctan',
    'displayText': 'arctan(x)',
    'snippet': 'arctan(${1:x})',
    'rightLabelHTML': '<span>Inverse tangent of the argument <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x, where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x is a real number and the output is in radians, see MathWorld</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'arctan2',
    'displayText': 'arctan2(y,x)',
    'snippet': 'arctan2(${1:y},${2:x})',
    'rightLabelHTML': '<span>Four-quadrant arctan function yielding <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="10.143ex" height="3.45ex" viewBox="0 -1009.3 4367 1485.3" role="img" focusable="false" style="vertical-align: -1.106ex;"><use xlink:href="#MJMAIN-61"><use xlink:href="#MJMAIN-72" x="505" y="0"><use xlink:href="#MJMAIN-63" x="902" y="0"><use xlink:href="#MJMAIN-74" x="1351" y="0"><use xlink:href="#MJMAIN-61" x="1745" y="0"><use xlink:href="#MJMAIN-6E" x="2250" y="0"><use xlink:href="#MJMAIN-28" x="2811" y="0"><use xlink:href="#MJMAIN-29" x="3973" y="0"> \\arctan(\\frac{y}{x}) which is the angle the vector <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="5.381ex" height="2.762ex" viewBox="0 -831.5 2316.7 1189" role="img" focusable="false" style="vertical-align: -0.83ex;"><use xlink:href="#MJMAIN-28" x="0" y="0"><use xlink:href="#MJMATHI-78" x="394" y="0"><use xlink:href="#MJMAIN-2C" x="971" y="0"><use xlink:href="#MJMATHI-79" x="1420" y="0"><use xlink:href="#MJMAIN-29" x="1922" y="0">(x,y) makes with (1,0) in radians.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'beta',
    'displayText': 'beta(x,y)',
    'snippet': 'beta(${1:x},${2:y})',
    'rightLabelHTML': '<span>Beta function: <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="17.261ex" height="4.551ex" viewBox="0 -1246.3 7431.6 1959.3" role="img" focusable="false" style="vertical-align: -1.656ex;"><use xlink:href="#MJMATHI-42" x="0" y="0"><use xlink:href="#MJMAIN-28" x="764" y="0"><use xlink:href="#MJMATHI-78" x="1158" y="0"><use xlink:href="#MJMAIN-2C" x="1735" y="0"><use xlink:href="#MJMATHI-79" x="2184" y="0"><use xlink:href="#MJMAIN-29" x="2686" y="0"><use xlink:href="#MJMAIN-3D" x="3358" y="0"> B(x,y) = \\frac{\\gamma(x)\\gamma(y)}{\\gamma(x+y)}, see MathWorld</span>',
    'modelType': 'DNLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'betaReg',
    'displayText': 'betaReg(x,y,z)',
    'snippet': 'betaReg(${1:x},${2:y},${3:z})',
    'rightLabelHTML': '<span>Regularized beta function, see MathWorld</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'binomial',
    'displayText': 'binomial(n,k)',
    'snippet': 'binomial(${1:n},${2:k})',
    'rightLabelHTML': '<span>(Generalized) Binomial coefficient for <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="7.506ex" height="2.211ex" viewBox="0 -772.3 3231.6 952" role="img" focusable="false" style="vertical-align: -0.417ex;"><use xlink:href="#MJMATHI-6E" x="0" y="0"><use xlink:href="#MJMAIN-3E" x="882" y="0"><use xlink:href="#MJMAIN-2212" x="1943" y="0"><use xlink:href="#MJMAIN-31" x="2726" y="0"> n > -1, <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="15.86ex" height="2.211ex" viewBox="0 -772.3 6828.6 952" role="img" focusable="false" style="vertical-align: -0.417ex;"><use xlink:href="#MJMAIN-2212" x="0" y="0"><use xlink:href="#MJMAIN-31" x="783" y="0"><use xlink:href="#MJMAIN-3C" x="1565" y="0"><use xlink:href="#MJMATHI-6B" x="2626" y="0"><use xlink:href="#MJMAIN-3C" x="3430" y="0"><use xlink:href="#MJMATHI-6E" x="4491" y="0"><use xlink:href="#MJMAIN-2B" x="5318" y="0"><use xlink:href="#MJMAIN-31" x="6323" y="0"> -1 < k < n+1 .</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'ceil',
    'displayText': 'ceil(x)',
    'snippet': 'ceil(${1:x})',
    'rightLabelHTML': '<span>Ceiling: returns the smallest integer greater than or equal to <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x.</span>',
    'modelType': 'DNLP',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'centropy',
    'displayText': 'centropy(x,y[,Z])',
    'snippet': 'centropy(${1:x},${2:y})',
    'rightLabelHTML': '<span>Cross-entropy: <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="11.085ex" height="4ex" viewBox="0 -1068.5 4772.9 1722.3" role="img" focusable="false" style="vertical-align: -1.518ex;"><use xlink:href="#MJMATHI-78" x="0" y="0"><use xlink:href="#MJMAIN-22C5" x="799" y="0"><use xlink:href="#MJMAIN-6C"><use xlink:href="#MJMAIN-6E" x="283" y="0"><use xlink:href="#MJMAIN-28" x="2148" y="0"><use xlink:href="#MJMAIN-29" x="4378" y="0">x \\cdot \\ln(\\frac{x+Z}{y+Z}), where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="7.791ex" height="2.074ex" viewBox="0 -772.3 3354.6 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-5A" x="0" y="0"><use xlink:href="#MJMAIN-3E"><use xlink:href="#MJMAIN-3D" x="783" y="0"><use xlink:href="#MJMAIN-30" x="2849" y="0">Z >= 0. Default <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.691ex" height="2.074ex" viewBox="0 -772.3 728 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-5A" x="0" y="0">Z: 1e-20.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'cos',
    'displayText': 'cos(x)',
    'snippet': 'cos(${1:x})',
    'rightLabelHTML': '<span>Cosine of the argument <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x, where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x must be in radians, see MathWorld</span>',
    'modelType': 'NLP',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'cosh',
    'displayText': 'cosh(x)',
    'snippet': 'cosh(${1:x})',
    'rightLabelHTML': '<span>Hyperbolic Cosine of <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x, where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x must be in radians, see MathWorld</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'cvPower',
    'displayText': 'cvPower(X,y)',
    'snippet': 'cvPower(${1:X},${2:y})',
    'rightLabelHTML': '<span>Real power: returns <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="3.267ex" height="2.074ex" viewBox="0 -772.3 1406.7 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMAINB-58" x="0" y="0"> \\mathbf{X^{y}} for <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="6.272ex" height="2.349ex" viewBox="0 -772.3 2700.6 1011.3" role="img" focusable="false" style="vertical-align: -0.555ex;"><use xlink:href="#MJMATHI-58" x="0" y="0"><use xlink:href="#MJMAIN-2265" x="1134" y="0"><use xlink:href="#MJMAIN-30" x="2195" y="0">X\\geq0.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'div',
    'displayText': 'div(dividend,divisor)',
    'snippet': 'div(${1:dividend},${2:divisor})',
    'rightLabelHTML': '<span>Returns <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="8.01ex" height="3.587ex" viewBox="0 -1009.3 3448.6 1544.5" role="img" focusable="false" style="vertical-align: -1.243ex;"> \\mathbf{\\frac{dividend}{divisor}}, undefined for <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="11.57ex" height="2.074ex" viewBox="0 -772.3 4981.6 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-64" x="0" y="0"><use xlink:href="#MJMATHI-69" x="528" y="0"><use xlink:href="#MJMATHI-76" x="878" y="0"><use xlink:href="#MJMATHI-69" x="1368" y="0"><use xlink:href="#MJMATHI-73" x="1718" y="0"><use xlink:href="#MJMATHI-6F" x="2192" y="0"><use xlink:href="#MJMATHI-72" x="2682" y="0"><use xlink:href="#MJMAIN-3D" x="3415" y="0"><use xlink:href="#MJMAIN-30" x="4476" y="0">divisor=0.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'div0',
    'displayText': 'div0(dividend,divisor)',
    'snippet': 'div0(${1:dividend},${2:divisor})',
    'rightLabelHTML': '<span>Returns <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="8.01ex" height="3.587ex" viewBox="0 -1009.3 3448.6 1544.5" role="img" focusable="false" style="vertical-align: -1.243ex;"> \\mathbf{\\frac{dividend}{divisor}}, returns <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="5.066ex" height="2.486ex" viewBox="0 -950 2181.3 1070.5" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMAIN-31"><use xlink:href="#MJMAIN-30" x="505" y="0">10^{299} for <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="11.57ex" height="2.074ex" viewBox="0 -772.3 4981.6 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-64" x="0" y="0"><use xlink:href="#MJMATHI-69" x="528" y="0"><use xlink:href="#MJMATHI-76" x="878" y="0"><use xlink:href="#MJMATHI-69" x="1368" y="0"><use xlink:href="#MJMATHI-73" x="1718" y="0"><use xlink:href="#MJMATHI-6F" x="2192" y="0"><use xlink:href="#MJMATHI-72" x="2682" y="0"><use xlink:href="#MJMAIN-3D" x="3415" y="0"><use xlink:href="#MJMAIN-30" x="4476" y="0">divisor=0.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'eDist',
    'displayText': 'eDist(x1[,x2,x3,...])',
    'snippet': 'eDist(${1:x1})',
    'rightLabelHTML': '<span>Euclidean or L-2 Norm: <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="14.553ex" height="4.688ex" viewBox="0 -1305.5 6266 2018.5" role="img" focusable="false" style="vertical-align: -1.656ex;"><use xlink:href="#MJSZ2-221A" x="0" y="20"><use xlink:href="#MJMATHI-78" x="0" y="0"><use xlink:href="#MJMAIN-2B" x="1256" y="0"><use xlink:href="#MJMATHI-78" x="0" y="0"><use xlink:href="#MJMAIN-2B" x="3295" y="0"><use xlink:href="#MJMAIN-2E" x="4078" y="0"><use xlink:href="#MJMAIN-2E" x="4528" y="0"><use xlink:href="#MJMAIN-2E" x="4977" y="0">\\sqrt{ x_{1}^{2} + x_{2}^{2} + ... }.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'entropy',
    'displayText': 'entropy(x)',
    'snippet': 'entropy(${1:x})',
    'rightLabelHTML': '<span>Entropy: <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="9.979ex" height="2.762ex" viewBox="0 -831.5 4296.4 1189" role="img" focusable="false" style="vertical-align: -0.83ex;"><use xlink:href="#MJMAIN-2212" x="0" y="0"><use xlink:href="#MJMATHI-78" x="783" y="0"><use xlink:href="#MJMAIN-22C5" x="1582" y="0"><use xlink:href="#MJMAIN-6C"><use xlink:href="#MJMAIN-6E" x="283" y="0"><use xlink:href="#MJMAIN-28" x="2931" y="0"><use xlink:href="#MJMATHI-78" x="3325" y="0"><use xlink:href="#MJMAIN-29" x="3902" y="0">-x\\cdot\\ln(x).</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'errorf',
    'displayText': 'errorf(x)',
    'snippet': 'errorf(${1:x})',
    'rightLabelHTML': '<span>Integral of the standard normal distribution from negative infinity to <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x: <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="13.769ex" height="6.34ex" viewBox="0 -1542.5 5928.3 2729.5" role="img" focusable="false" style="vertical-align: -2.757ex;"><use xlink:href="#MJSZ1-222B" x="324" y="0"><use xlink:href="#MJMATHI-65" x="0" y="0"><use xlink:href="#MJMATHI-64" x="5034" y="0"><use xlink:href="#MJMATHI-74" x="5562" y="0">\\frac{1}{\\sqrt{2\\pi}} \\int\\limits_{-\\infty}^x e^{\\frac{-t^{2}}{2}}dt.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'execSeed',
    'displayText': 'execSeed',
    'snippet': 'execSeed',
    'rightLabelHTML': '<span>Reads or resets the seed for the random number generator (RNG). Note that the state of the RNG cannot typically be captured in one seed value; in such cases "reading" the seed involves harvesting a seed from the RNG, resetting the RNG with this seed, and returning the seed.</span>',
    'modelType': 'none',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'exp',
    'displayText': 'exp(x)',
    'snippet': 'exp(${1:x})',
    'rightLabelHTML': '<span>Exponential of <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x: <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="2.274ex" height="2.074ex" viewBox="0 -772.3 979 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-65" x="0" y="0">e^{x}, see MathWorld</span>',
    'modelType': 'NLP',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'fact',
    'displayText': 'fact(N)',
    'snippet': 'fact(${1:N})',
    'rightLabelHTML': '<span>Factorial of <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="2.074ex" height="2.074ex" viewBox="0 -772.3 893 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-4E" x="0" y="0">N, where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="6.356ex" height="2.349ex" viewBox="0 -772.3 2736.6 1011.3" role="img" focusable="false" style="vertical-align: -0.555ex;"><use xlink:href="#MJMATHI-4E" x="0" y="0"><use xlink:href="#MJMAIN-2265" x="1170" y="0"><use xlink:href="#MJMAIN-30" x="2231" y="0">N \\geq 0 is an integer.</span>',
    'modelType': 'any',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'floor',
    'displayText': 'floor(x)',
    'snippet': 'floor(${1:x})',
    'rightLabelHTML': '<span>Floor: greatest integer less than or equal to <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x.</span>',
    'modelType': 'DNLP',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'frac',
    'displayText': 'frac(x)',
    'snippet': 'frac(${1:x})',
    'rightLabelHTML': '<span>Returns the fractional part of <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x, s.t. x = trunc(x) + frac(x)</span>',
    'modelType': 'DNLP',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'gamma',
    'displayText': 'gamma(x)',
    'snippet': 'gamma(${1:x})',
    'rightLabelHTML': '<span>Gamma function : <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="19.233ex" height="6.34ex" viewBox="0 -1542.5 8280.8 2729.5" role="img" focusable="false" style="vertical-align: -2.757ex;"><use xlink:href="#MJMATHI-3B3" x="0" y="0"><use xlink:href="#MJMAIN-28" x="548" y="0"><use xlink:href="#MJMATHI-78" x="942" y="0"><use xlink:href="#MJMAIN-29" x="1519" y="0"><use xlink:href="#MJMAIN-3D" x="2190" y="0"><use xlink:href="#MJSZ1-222B" x="47" y="0"><use xlink:href="#MJMATHI-74" x="0" y="0"><use xlink:href="#MJMATHI-65" x="0" y="0"><use xlink:href="#MJMATHI-64" x="7386" y="0"><use xlink:href="#MJMATHI-74" x="7914" y="0"> \\gamma(x)= \\int\\limits_{0}^{\\infty} t^{x-1}e^{-t}dt, see MathWorld</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'gammaReg',
    'displayText': 'gammaReg(x,a)',
    'snippet': 'gammaReg(${1:x},${2:a})',
    'rightLabelHTML': '<span>Regularized Gamma function, see MathWorld</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'log',
    'displayText': 'log(x)',
    'snippet': 'log(${1:x})',
    'rightLabelHTML': '<span>Natural logarithm: logarithm base <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.094ex" height="1.523ex" viewBox="0 -535.3 471 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-65" x="0" y="0">e, see MathWorld</span>',
    'modelType': 'NLP',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'logBeta',
    'displayText': 'logBeta(x,y)',
    'snippet': 'logBeta(${1:x},${2:y})',
    'rightLabelHTML': '<span>Log Beta function: <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="11.988ex" height="2.762ex" viewBox="0 -831.5 5161.7 1189" role="img" focusable="false" style="vertical-align: -0.83ex;"><use xlink:href="#MJMAIN-6C"><use xlink:href="#MJMAIN-6F" x="283" y="0"><use xlink:href="#MJMAIN-67" x="788" y="0"><use xlink:href="#MJMAIN-28" x="1293" y="0"><use xlink:href="#MJMATHI-42" x="1687" y="0"><use xlink:href="#MJMAIN-28" x="2451" y="0"><use xlink:href="#MJMATHI-78" x="2845" y="0"><use xlink:href="#MJMAIN-2C" x="3422" y="0"><use xlink:href="#MJMATHI-79" x="3871" y="0"><use xlink:href="#MJMAIN-29" x="4373" y="0"><use xlink:href="#MJMAIN-29" x="4767" y="0">\\log(B(x,y)).</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'logGamma',
    'displayText': 'logGamma(x)',
    'snippet': 'logGamma(${1:x})',
    'rightLabelHTML': '<span>Log Gamma function as discussed in MathWorld</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'log10',
    'displayText': 'log10(x)',
    'snippet': 'log10(${1:x})',
    'rightLabelHTML': '<span>Common logarithm: logarithm base 10, see MathWorld</span>',
    'modelType': 'NLP',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'log2',
    'displayText': 'log2(x)',
    'snippet': 'log2(${1:x})',
    'rightLabelHTML': '<span>Binary logarithm: logarithm base 2, see MathWorld</span>',
    'modelType': 'NLP',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'max',
    'displayText': 'max(x1,x2,x3,...)',
    'snippet': 'max(${1:x1},${2:x2},${3:x3},${4:...})',
    'rightLabelHTML': '<span>Maximum value of the arguments, where the number of arguments may vary.</span>',
    'modelType': 'DNLP',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'min',
    'displayText': 'min(x1,x2,x3,...)',
    'snippet': 'min(${1:x1},${2:x2},${3:x3},${4:...})',
    'rightLabelHTML': '<span>Minimum value of the arguments, where the number of arguments may vary.</span>',
    'modelType': 'DNLP',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'mod',
    'displayText': 'mod(x,y)',
    'snippet': 'mod(${1:x},${2:y})',
    'rightLabelHTML': '<span>Remainder of <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x divided by <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.166ex" height="1.936ex" viewBox="0 -535.3 502 833.5" role="img" focusable="false" style="vertical-align: -0.693ex;"><use xlink:href="#MJMATHI-79" x="0" y="0">y.</span>',
    'modelType': 'DNLP',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'ncpCM',
    'displayText': 'ncpCM(x,y,Z)',
    'snippet': 'ncpCM(${1:x},${2:y},${3:Z})',
    'rightLabelHTML': '<span>Chen-Mangasarian smoothing: <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="19.71ex" height="3.863ex" viewBox="0 -1305.5 8486.3 1663" role="img" focusable="false" style="vertical-align: -0.83ex;"><use xlink:href="#MJMATHI-78" x="0" y="0"><use xlink:href="#MJMAIN-2212" x="799" y="0"><use xlink:href="#MJMATHI-5A" x="1804" y="0"><use xlink:href="#MJMAIN-22C5" x="2754" y="0"><use xlink:href="#MJMAIN-6C"><use xlink:href="#MJMAIN-6E" x="283" y="0"><use xlink:href="#MJMAIN-28" x="4103" y="0"><use xlink:href="#MJMAIN-31" x="4497" y="0"><use xlink:href="#MJMAIN-2B" x="5225" y="0"><use xlink:href="#MJMATHI-65" x="0" y="0"><use xlink:href="#MJMAIN-29" x="8092" y="0">x-Z\\cdot \\ln(1+e^{\\frac{x-y}{Z}}).</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'ncpF',
    'displayText': 'ncpF(x,y[,Z])',
    'snippet': 'ncpF(${1:x},${2:y})',
    'rightLabelHTML': '<span>Fisher-Burmeister smoothing: <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="27.262ex" height="3.312ex" viewBox="0 -1009.3 11737.6 1426" role="img" focusable="false" style="vertical-align: -0.968ex;"><use xlink:href="#MJSZ1-221A" x="0" y="19"><use xlink:href="#MJMAIN-28" x="0" y="0"><use xlink:href="#MJMATHI-78" x="0" y="0"><use xlink:href="#MJMAIN-2B" x="1650" y="0"><use xlink:href="#MJMATHI-79" x="0" y="0"><use xlink:href="#MJMAIN-2B" x="3838" y="0"><use xlink:href="#MJMAIN-32" x="4844" y="0"><use xlink:href="#MJMAIN-22C5" x="5571" y="0"><use xlink:href="#MJMATHI-5A" x="6076" y="0"><use xlink:href="#MJMAIN-29" x="6804" y="0"><use xlink:href="#MJMAIN-2212" x="8425" y="0"><use xlink:href="#MJMATHI-78" x="9431" y="0"><use xlink:href="#MJMAIN-2212" x="10230" y="0"><use xlink:href="#MJMATHI-79" x="11235" y="0">\\sqrt{(x^{2}+y^{2}+2\\cdot Z)}-x-y, <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="5.973ex" height="2.349ex" viewBox="0 -772.3 2571.6 1011.3" role="img" focusable="false" style="vertical-align: -0.555ex;"><use xlink:href="#MJMATHI-5A" x="0" y="0"><use xlink:href="#MJMAIN-2265" x="1005" y="0"><use xlink:href="#MJMAIN-30" x="2066" y="0">Z\\geq0. Default <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="5.973ex" height="2.074ex" viewBox="0 -772.3 2571.6 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-5A" x="0" y="0"><use xlink:href="#MJMAIN-3D" x="1005" y="0"><use xlink:href="#MJMAIN-30" x="2066" y="0">Z=0.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'ncpVUpow',
    'displayText': 'ncpVUpow(r,s[,MU])',
    'snippet': 'ncpVUpow(${1:r},${2:s})',
    'rightLabelHTML': '<span>NCP Veelken-Ulbrich: smoothed min(r,s) \n result = <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="37.54ex" height="9.367ex" viewBox="0 -2253.5 16162.8 4033" role="img" focusable="false" style="vertical-align: -4.133ex;"><use xlink:href="#MJSZ4-23A7" x="0" y="-909"><use xlink:href="#MJSZ4-23AA"><use xlink:href="#MJSZ4-23A8" x="0" y="-2161"><use xlink:href="#MJSZ4-23AA"><use xlink:href="#MJSZ4-23A9" x="0" y="-2912"><use xlink:href="#MJMATHI-69" x="0" y="0"><use xlink:href="#MJMATHI-66" x="350" y="0"><use xlink:href="#MJMAIN-7C" x="1155" y="0"><use xlink:href="#MJMATHI-74" x="1438" y="0"><use xlink:href="#MJMAIN-7C" x="1804" y="0"><use xlink:href="#MJMAIN-2265" x="2364" y="0"><use xlink:href="#MJMATHI-3BC" x="3425" y="0"><use xlink:href="#MJMATHI-6F" x="0" y="0"><use xlink:href="#MJMATHI-74" x="490" y="0"><use xlink:href="#MJMATHI-68" x="856" y="0"><use xlink:href="#MJMATHI-65" x="1437" y="0"><use xlink:href="#MJMATHI-72" x="1908" y="0"><use xlink:href="#MJMATHI-77" x="2364" y="0"><use xlink:href="#MJMATHI-69" x="3085" y="0"><use xlink:href="#MJMATHI-73" x="3435" y="0"><use xlink:href="#MJMATHI-65" x="3909" y="0"> \\left\\{ \\begin{array}{ll}\\frac{(r + s - |t|)}{2} & if \\ |t| \\geq \\mu\\\\ \\frac{(r + s - \\frac{\\mu}{8} \\cdot (- (\\frac{t}{\\mu})^{4}+6(\\frac{t}{\\mu})^{2} +3))}{2} & otherwise \\end{array} \\right. \n where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="8.97ex" height="2.074ex" viewBox="0 -713 3862 892.8" role="img" focusable="false" style="vertical-align: -0.417ex;"><use xlink:href="#MJMATHI-74" x="0" y="0"><use xlink:href="#MJMAIN-3D" x="643" y="0"><use xlink:href="#MJMATHI-72" x="1704" y="0"><use xlink:href="#MJMAIN-2212" x="2382" y="0"><use xlink:href="#MJMATHI-73" x="3388" y="0">t=r-s. Default <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="8.528ex" height="2.074ex" viewBox="0 -772.3 3671.6 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-4D" x="0" y="0"><use xlink:href="#MJMATHI-55" x="1056" y="0"><use xlink:href="#MJMAIN-3D" x="2105" y="0"><use xlink:href="#MJMAIN-30" x="3166" y="0">MU=0.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'ncpVUsin',
    'displayText': 'ncpVUsin(r,s[,MU])',
    'snippet': 'ncpVUsin(${1:r},${2:s})',
    'rightLabelHTML': '<span>NCP Veelken-Ulbrich: smoothed min(r,s) \n result = <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="36.099ex" height="9.78ex" viewBox="0 -2372 15542.6 4210.8" role="img" focusable="false" style="vertical-align: -4.088ex; margin-bottom: -0.183ex;"><use xlink:href="#MJSZ4-23A7" x="0" y="-909"><use xlink:href="#MJSZ4-23AA"><use xlink:href="#MJSZ4-23A8" x="0" y="-2260"><use xlink:href="#MJSZ4-23AA"><use xlink:href="#MJSZ4-23A9" x="0" y="-3111"><use xlink:href="#MJMATHI-69" x="0" y="0"><use xlink:href="#MJMATHI-66" x="350" y="0"><use xlink:href="#MJMAIN-7C" x="1155" y="0"><use xlink:href="#MJMATHI-74" x="1438" y="0"><use xlink:href="#MJMAIN-7C" x="1804" y="0"><use xlink:href="#MJMAIN-2265" x="2364" y="0"><use xlink:href="#MJMATHI-3BC" x="3425" y="0"><use xlink:href="#MJMATHI-6F" x="0" y="0"><use xlink:href="#MJMATHI-74" x="490" y="0"><use xlink:href="#MJMATHI-68" x="856" y="0"><use xlink:href="#MJMATHI-65" x="1437" y="0"><use xlink:href="#MJMATHI-72" x="1908" y="0"><use xlink:href="#MJMATHI-77" x="2364" y="0"><use xlink:href="#MJMATHI-69" x="3085" y="0"><use xlink:href="#MJMATHI-73" x="3435" y="0"><use xlink:href="#MJMATHI-65" x="3909" y="0"> \\left\\{ \\begin{array}{ll} \\frac{(r + s - |t|)}{2} & if \\ |t| \\geq \\mu\\\\\\frac{(r + s - (\\frac{2\\mu}{\\pi} \\sin(\\frac{\\pi}{2\\mu} +\\frac{3\\pi}{2})+\\mu))}{2} & otherwise \\end{array} \\right. \n where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="8.97ex" height="2.074ex" viewBox="0 -713 3862 892.8" role="img" focusable="false" style="vertical-align: -0.417ex;"><use xlink:href="#MJMATHI-74" x="0" y="0"><use xlink:href="#MJMAIN-3D" x="643" y="0"><use xlink:href="#MJMATHI-72" x="1704" y="0"><use xlink:href="#MJMAIN-2212" x="2382" y="0"><use xlink:href="#MJMATHI-73" x="3388" y="0">t=r-s. Default <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="8.528ex" height="2.074ex" viewBox="0 -772.3 3671.6 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-4D" x="0" y="0"><use xlink:href="#MJMATHI-55" x="1056" y="0"><use xlink:href="#MJMAIN-3D" x="2105" y="0"><use xlink:href="#MJMAIN-30" x="3166" y="0">MU=0.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'normal',
    'displayText': 'normal(MEAN,STDDEV)',
    'snippet': 'normal(${1:MEAN},${2:STDDEV})',
    'rightLabelHTML': '<span>Generate a random number from the normal distribution with mean MEAN and standard deviation STDDEV, see MathWorld</span>',
    'modelType': 'none',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'pi',
    'displayText': 'pi',
    'snippet': 'pi',
    'rightLabelHTML': '<span>Value of <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="17.161ex" height="2.074ex" viewBox="0 -772.3 7388.6 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-3C0" x="0" y="0"><use xlink:href="#MJMAINB-3D" x="855" y="0"><use xlink:href="#MJMAINB-33"><use xlink:href="#MJMAINB-2E" x="580" y="0"><use xlink:href="#MJMAINB-31" x="904" y="0"><use xlink:href="#MJMAINB-34" x="1484" y="0"><use xlink:href="#MJMAINB-31" x="2064" y="0"><use xlink:href="#MJMAINB-35" x="2644" y="0"><use xlink:href="#MJMAINB-39" x="3224" y="0"><use xlink:href="#MJMAINB-33" x="3804" y="0"><use xlink:href="#MJMAINB-2E" x="4384" y="0"><use xlink:href="#MJMAINB-2E" x="4708" y="0"><use xlink:href="#MJMAINB-2E" x="5032" y="0"> \\mathbf{\\pi=3.141593...}.</span>',
    'modelType': 'any',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'poly',
    'displayText': 'poly(x,A0,A1,A2[,A3,...])',
    'snippet': 'poly(${1:x},${2:A0},${3:A1},${4:A2})',
    'rightLabelHTML': '<span>Returns <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="4.429ex" height="2.762ex" viewBox="-34 -831.5 1907 1189" role="img" focusable="false" style="vertical-align: -0.83ex; margin-left: -0.079ex;"><use xlink:href="#MJMATHI-70" x="0" y="0"><use xlink:href="#MJMAIN-28" x="508" y="0"><use xlink:href="#MJMATHI-78" x="902" y="0"><use xlink:href="#MJMAIN-29" x="1479" y="0">p(x), where the polynomial <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="47.141ex" height="3.037ex" viewBox="-34 -950 20296.8 1307.5" role="img" focusable="false" style="vertical-align: -0.83ex; margin-left: -0.079ex;"><use xlink:href="#MJMATHI-70" x="0" y="0"><use xlink:href="#MJMAIN-28" x="508" y="0"><use xlink:href="#MJMATHI-78" x="902" y="0"><use xlink:href="#MJMAIN-29" x="1479" y="0"><use xlink:href="#MJMAIN-3D" x="2150" y="0"><use xlink:href="#MJMATHI-41" x="0" y="0"><use xlink:href="#MJMAIN-2B" x="4645" y="0"><use xlink:href="#MJMATHI-41" x="0" y="0"><use xlink:href="#MJMATHI-78" x="6863" y="0"><use xlink:href="#MJMAIN-2B" x="7662" y="0"><use xlink:href="#MJMATHI-41" x="0" y="0"><use xlink:href="#MJMATHI-78" x="0" y="0"><use xlink:href="#MJMAIN-2B" x="11136" y="0"><use xlink:href="#MJMATHI-41" x="0" y="0"><use xlink:href="#MJMATHI-78" x="0" y="0"><use xlink:href="#MJMAIN-2B" x="14387" y="0"><use xlink:href="#MJMAIN-2E" x="15170" y="0"><use xlink:href="#MJMAIN-2E" x="15620" y="0"><use xlink:href="#MJMAIN-2E" x="16069" y="0"><use xlink:href="#MJMAIN-2B" x="16519" y="0"><use xlink:href="#MJMATHI-41" x="0" y="0"><use xlink:href="#MJMATHI-78" x="0" y="0">p(x) = A_{0}+A_{1}x+A_{2}x^{2}+A_{3}x^{3}+...+A_{20}x^{20}. By default <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="15.964ex" height="2.624ex" viewBox="0 -831.5 6873.2 1129.8" role="img" focusable="false" style="vertical-align: -0.693ex;"><use xlink:href="#MJMATHI-41" x="0" y="0"><use xlink:href="#MJMAIN-2C" x="1212" y="0"><use xlink:href="#MJMAIN-2E" x="1661" y="0"><use xlink:href="#MJMAIN-2E" x="2111" y="0"><use xlink:href="#MJMAIN-2E" x="2561" y="0"><use xlink:href="#MJMAIN-2C" x="3010" y="0"><use xlink:href="#MJMATHI-41" x="0" y="0"><use xlink:href="#MJMAIN-3D" x="5307" y="0"><use xlink:href="#MJMAIN-30" x="6368" y="0">A_{3},...,A_{20}=0.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'power',
    'displayText': 'power(x,Y)',
    'snippet': 'power(${1:x},${2:Y})',
    'rightLabelHTML': '<span>Returns <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="3.089ex" height="2.486ex" viewBox="0 -950 1330 1070.5" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMAINB-78" x="0" y="0"> \\mathbf{x^Y}, where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.784ex" height="2.074ex" viewBox="0 -772.3 768 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-59" x="0" y="0">Y must be an integer.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'randBinomial',
    'displayText': 'randBinomial(N,P)',
    'snippet': 'randBinomial(${1:N},${2:P})',
    'rightLabelHTML': '<span>Generate a random number from the binomial distribution, where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="2.074ex" height="2.074ex" viewBox="0 -772.3 893 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-4E" x="0" y="0">N is the number of trials and <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.756ex" height="2.074ex" viewBox="0 -772.3 756 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-50" x="0" y="0">P the probability of success for each trial, see MathWorld</span>',
    'modelType': 'none',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'randLinear',
    'displayText': 'randLinear(LOW,SLOPE,HIGH)',
    'snippet': 'randLinear(${1:LOW},${2:SLOPE},${3:HIGH})',
    'rightLabelHTML': '<span>Generate a random number between LOW and HIGH with linear distribution, SLOPE must be greater than <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="13.995ex" height="4.138ex" viewBox="0 -1009.3 6025.7 1781.5" role="img" focusable="false" style="vertical-align: -1.794ex;"><use xlink:href="#MJMAIN-48"><use xlink:href="#MJMAIN-49" x="755" y="0"><use xlink:href="#MJMAIN-47" x="1121" y="0"><use xlink:href="#MJMAIN-48" x="1911" y="0"><use xlink:href="#MJMAIN-4C"><use xlink:href="#MJMAIN-4F" x="630" y="0"><use xlink:href="#MJMAIN-57" x="1413" y="0">\\frac{2}{\\mbox{HIGH}-\\mbox{LOW}}</span>',
    'modelType': 'none',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'randTriangle',
    'displayText': 'randTriangle(LOW,MID,HIGH)',
    'snippet': 'randTriangle(${1:LOW},${2:MID},${3:HIGH})',
    'rightLabelHTML': '<span>Generate a random number between LOW and HIGH with triangular distribution, MID is the most probable number, see MathWorld</span>',
    'modelType': 'none',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'round',
    'displayText': 'round(x[,DECPL])',
    'snippet': 'round(${1:x})',
    'rightLabelHTML': '<span>Round <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x to DECPL decimal places. Default DECPL=0</span>',
    'modelType': 'DNLP',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'rPower',
    'displayText': 'rPower(x,y)',
    'snippet': 'rPower(${1:x},${2:y})',
    'rightLabelHTML': '<span>Returns <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="2.397ex" height="2.074ex" viewBox="0 -772.3 1032 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x^{y} for <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="5.622ex" height="2.074ex" viewBox="0 -772.3 2420.6 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0"><use xlink:href="#MJMAIN-3E" x="854" y="0"><use xlink:href="#MJMAIN-30" x="1915" y="0">x > 0 and also for <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="5.622ex" height="2.074ex" viewBox="0 -772.3 2420.6 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0"><use xlink:href="#MJMAIN-3D" x="854" y="0"><use xlink:href="#MJMAIN-30" x="1915" y="0">x = 0 and restricted values of <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.166ex" height="1.936ex" viewBox="0 -535.3 502 833.5" role="img" focusable="false" style="vertical-align: -0.693ex;"><use xlink:href="#MJMATHI-79" x="0" y="0">y. This function is equivalent to the operation \'x**y\', see Standard Arithmetic Operations.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'sigmoid',
    'displayText': 'sigmoid(x)',
    'snippet': 'sigmoid(${1:x})',
    'rightLabelHTML': '<span>Sigmoid: <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="5.469ex" height="3.725ex" viewBox="0 -1009.3 2354.5 1603.8" role="img" focusable="false" style="vertical-align: -1.381ex;">\\frac{1}{1+e^{-x}}, see MathWorld</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'sign',
    'displayText': 'sign(x)',
    'snippet': 'sign(${1:x})',
    'rightLabelHTML': '<span>Sign of <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x: returns 1 if <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="5.622ex" height="2.074ex" viewBox="0 -772.3 2420.6 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0"><use xlink:href="#MJMAIN-3E" x="854" y="0"><use xlink:href="#MJMAIN-30" x="1915" y="0">x > 0, -1 if <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="5.622ex" height="2.074ex" viewBox="0 -772.3 2420.6 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0"><use xlink:href="#MJMAIN-3C" x="854" y="0"><use xlink:href="#MJMAIN-30" x="1915" y="0">x < 0, and 0 if <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="5.622ex" height="2.074ex" viewBox="0 -772.3 2420.6 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0"><use xlink:href="#MJMAIN-3D" x="854" y="0"><use xlink:href="#MJMAIN-30" x="1915" y="0">x = 0.</span>',
    'modelType': 'DNLP',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'signPower',
    'displayText': 'signPower(x,Y)',
    'snippet': 'signPower(${1:x},${2:Y})',
    'rightLabelHTML': '<span>Signed power: for <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="6.066ex" height="2.074ex" viewBox="0 -772.3 2611.6 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-59" x="0" y="0"><use xlink:href="#MJMAIN-3E" x="1045" y="0"><use xlink:href="#MJMAIN-30" x="2106" y="0">Y > 0, returns <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="2.834ex" height="2.486ex" viewBox="0 -950 1220.1 1070.5" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x^{Y} if <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="5.622ex" height="2.349ex" viewBox="0 -772.3 2420.6 1011.3" role="img" focusable="false" style="vertical-align: -0.555ex;"><use xlink:href="#MJMATHI-78" x="0" y="0"><use xlink:href="#MJMAIN-2265" x="854" y="0"><use xlink:href="#MJMAIN-30" x="1915" y="0">x\\geq 0 and <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="8.829ex" height="3.312ex" viewBox="0 -1068.5 3801.5 1426" role="img" focusable="false" style="vertical-align: -0.83ex;"><use xlink:href="#MJMAIN-2212" x="0" y="0"><use xlink:href="#MJMAIN-31" x="783" y="0"><use xlink:href="#MJMAIN-22C5" x="1510" y="0"><use xlink:href="#MJMAIN-7C" x="2015" y="0"><use xlink:href="#MJMATHI-78" x="2298" y="0"><use xlink:href="#MJMAIN-7C" x="0" y="0">-1\\cdot |x|^{Y} if <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="5.622ex" height="2.074ex" viewBox="0 -772.3 2420.6 892.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0"><use xlink:href="#MJMAIN-3C" x="854" y="0"><use xlink:href="#MJMAIN-30" x="1915" y="0">x<0.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'sin',
    'displayText': 'sin(x)',
    'snippet': 'sin(${1:x})',
    'rightLabelHTML': '<span>Sine of the argument <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x, where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x must be in radians, see MathWorld</span>',
    'modelType': 'NLP',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'sinh',
    'displayText': 'sinh(x)',
    'snippet': 'sinh(${1:x})',
    'rightLabelHTML': '<span>Hyperbolic sine of <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x, where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x must be in radians, see MathWorld</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'slexp',
    'displayText': 'slexp(x[,S])',
    'snippet': 'slexp(${1:x})',
    'rightLabelHTML': '<span>Smooth (linear) exponential: result = <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="33.39ex" height="6.064ex" viewBox="0 -1542.5 14376.3 2611" role="img" focusable="false" style="vertical-align: -2.482ex;"><use xlink:href="#MJSZ3-7B"><use xlink:href="#MJMATHI-65" x="0" y="0"><use xlink:href="#MJMATHI-65" x="0" y="0"><use xlink:href="#MJMAIN-22C5" x="1201" y="0"><use xlink:href="#MJMAIN-28" x="1706" y="0"><use xlink:href="#MJMAIN-31" x="2100" y="0"><use xlink:href="#MJMAIN-2B" x="2827" y="0"><use xlink:href="#MJMAIN-28" x="3832" y="0"><use xlink:href="#MJMATHI-78" x="4226" y="0"><use xlink:href="#MJMAIN-2212" x="5026" y="0"><use xlink:href="#MJMATHI-53" x="6031" y="0"><use xlink:href="#MJMAIN-29" x="6681" y="0"><use xlink:href="#MJMAIN-29" x="7075" y="0"><use xlink:href="#MJMAIN-69"><use xlink:href="#MJMAIN-66" x="283" y="0"><use xlink:href="#MJMATHI-78" x="844" y="0"><use xlink:href="#MJMAIN-2264" x="1698" y="0"><use xlink:href="#MJMATHI-53" x="2759" y="0"><use xlink:href="#MJMAIN-6F"><use xlink:href="#MJMAIN-74" x="505" y="0"><use xlink:href="#MJMAIN-68" x="899" y="0"><use xlink:href="#MJMAIN-65" x="1460" y="0"><use xlink:href="#MJMAIN-72" x="1909" y="0"><use xlink:href="#MJMAIN-77" x="2306" y="0"><use xlink:href="#MJMAIN-69" x="3033" y="0"><use xlink:href="#MJMAIN-73" x="3316" y="0"><use xlink:href="#MJMAIN-65" x="3715" y="0"> \\left\\{ \\begin{array}{ll} e^{x} & \\mbox{if} \\ x \\leq S \\\\ e^{x} \\cdot (1 + (x - S)) & \\mbox{otherwise} \\end{array} \\right.\\ \\ where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="9.956ex" height="2.211ex" viewBox="0 -831.5 4286.6 952" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-53" x="0" y="0"><use xlink:href="#MJMAIN-3C"><use xlink:href="#MJMAIN-3D" x="783" y="0"><use xlink:href="#MJMAIN-31"><use xlink:href="#MJMAIN-35" x="505" y="0"><use xlink:href="#MJMAIN-30" x="1010" y="0">S<=150, default <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="8.137ex" height="2.211ex" viewBox="0 -831.5 3503.6 952" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-53" x="0" y="0"><use xlink:href="#MJMAIN-3D" x="927" y="0"><use xlink:href="#MJMAIN-31"><use xlink:href="#MJMAIN-35" x="505" y="0"><use xlink:href="#MJMAIN-30" x="1010" y="0">S=150.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'sllog10',
    'displayText': 'sllog10(x[,S])',
    'snippet': 'sllog10(${1:x})',
    'rightLabelHTML': '<span>Smooth (linear) logarithm base 10: result = <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="35.712ex" height="7.716ex" viewBox="0 -1898 15376 3322" role="img" focusable="false" style="vertical-align: -3.029ex; margin-bottom: -0.279ex;"><use xlink:href="#MJSZ4-7B"><use xlink:href="#MJMAIN-6C"><use xlink:href="#MJMAIN-6F" x="283" y="0"><use xlink:href="#MJMAIN-67" x="788" y="0"><use xlink:href="#MJMAIN-28" x="2107" y="0"><use xlink:href="#MJMATHI-78" x="2501" y="0"><use xlink:href="#MJMAIN-29" x="3078" y="0"><use xlink:href="#MJMAIN-22C5" x="2450" y="0"><use xlink:href="#MJMAIN-28" x="2955" y="0"><use xlink:href="#MJMAIN-6C"><use xlink:href="#MJMAIN-6E" x="283" y="0"><use xlink:href="#MJMATHI-53" x="4360" y="0"><use xlink:href="#MJMAIN-2B" x="5232" y="0"><use xlink:href="#MJMAIN-29" x="8019" y="0"><use xlink:href="#MJMAIN-69"><use xlink:href="#MJMAIN-66" x="283" y="0"><use xlink:href="#MJMATHI-78" x="844" y="0"><use xlink:href="#MJMAIN-2265" x="1698" y="0"><use xlink:href="#MJMATHI-53" x="2759" y="0"><use xlink:href="#MJMAIN-6F"><use xlink:href="#MJMAIN-74" x="505" y="0"><use xlink:href="#MJMAIN-68" x="899" y="0"><use xlink:href="#MJMAIN-65" x="1460" y="0"><use xlink:href="#MJMAIN-72" x="1909" y="0"><use xlink:href="#MJMAIN-77" x="2306" y="0"><use xlink:href="#MJMAIN-69" x="3033" y="0"><use xlink:href="#MJMAIN-73" x="3316" y="0"><use xlink:href="#MJMAIN-65" x="3715" y="0"> \\left\\{ \\begin{array}{ll} \\log_{10}(x) & \\mbox{if} \\ x \\geq S \\\\ \\frac{1}{\\ln(10)} \\cdot (\\ln S + \\frac{x - S}{S}) & \\mbox{otherwise} \\end{array} \\right.\\ \\ where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="11.774ex" height="2.349ex" viewBox="0 -831.5 5069.6 1011.3" role="img" focusable="false" style="vertical-align: -0.417ex;"><use xlink:href="#MJMATHI-53" x="0" y="0"><use xlink:href="#MJMAIN-3E"><use xlink:href="#MJMAIN-3D" x="783" y="0"><use xlink:href="#MJMAIN-2212" x="2771" y="0"><use xlink:href="#MJMAIN-31"><use xlink:href="#MJMAIN-35" x="505" y="0"><use xlink:href="#MJMAIN-30" x="1010" y="0">S>=-150, default <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="9.956ex" height="2.349ex" viewBox="0 -831.5 4286.6 1011.3" role="img" focusable="false" style="vertical-align: -0.417ex;"><use xlink:href="#MJMATHI-53" x="0" y="0"><use xlink:href="#MJMAIN-3D" x="927" y="0"><use xlink:href="#MJMAIN-2212" x="1988" y="0"><use xlink:href="#MJMAIN-31"><use xlink:href="#MJMAIN-35" x="505" y="0"><use xlink:href="#MJMAIN-30" x="1010" y="0">S=-150.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'slrec',
    'displayText': 'slrec(x[,S])',
    'snippet': 'slrec(${1:x})',
    'rightLabelHTML': '<span>Smooth (linear) reciprocal: result = <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="25.064ex" height="7.991ex" viewBox="0 -1957.3 10791.4 3440.5" role="img" focusable="false" style="vertical-align: -3.445ex;"><use xlink:href="#MJSZ4-7B"><use xlink:href="#MJMAIN-2212" x="1041" y="0"><use xlink:href="#MJMAIN-69"><use xlink:href="#MJMAIN-66" x="283" y="0"><use xlink:href="#MJMATHI-78" x="844" y="0"><use xlink:href="#MJMAIN-2265" x="1698" y="0"><use xlink:href="#MJMATHI-53" x="2759" y="0"><use xlink:href="#MJMAIN-6F"><use xlink:href="#MJMAIN-74" x="505" y="0"><use xlink:href="#MJMAIN-68" x="899" y="0"><use xlink:href="#MJMAIN-65" x="1460" y="0"><use xlink:href="#MJMAIN-72" x="1909" y="0"><use xlink:href="#MJMAIN-77" x="2306" y="0"><use xlink:href="#MJMAIN-69" x="3033" y="0"><use xlink:href="#MJMAIN-73" x="3316" y="0"><use xlink:href="#MJMAIN-65" x="3715" y="0"> \\left\\{ \\begin{array}{ll} \\frac{1}{x} & \\mbox{if} \\ x \\geq S \\\\ \\frac{1}{S} - \\frac{x - S}{S^2} & \\mbox{otherwise} \\end{array} \\right.\\ \\ where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="11.96ex" height="2.486ex" viewBox="0 -950 5149.4 1070.5" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-53" x="0" y="0"><use xlink:href="#MJMAIN-3E"><use xlink:href="#MJMAIN-3D" x="783" y="0"><use xlink:href="#MJMAIN-31"><use xlink:href="#MJMAIN-30" x="505" y="0">S>=10^{-10}, default <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="10.141ex" height="2.486ex" viewBox="0 -950 4366.4 1070.5" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-53" x="0" y="0"><use xlink:href="#MJMAIN-3D" x="927" y="0"><use xlink:href="#MJMAIN-31"><use xlink:href="#MJMAIN-30" x="505" y="0">S=10^{-10}.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'sqexp',
    'displayText': 'sqexp(x[,S])',
    'snippet': 'sqexp(${1:x})',
    'rightLabelHTML': '<span>Smooth (quadratic) exponential: result = <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="42.553ex" height="7.578ex" viewBox="0 -1898 18321.5 3262.8" role="img" focusable="false" style="vertical-align: -3.17ex;"><use xlink:href="#MJSZ4-7B"><use xlink:href="#MJMATHI-65" x="0" y="0"><use xlink:href="#MJMATHI-65" x="0" y="0"><use xlink:href="#MJMAIN-22C5" x="1201" y="0"><use xlink:href="#MJMAIN-28" x="1706" y="0"><use xlink:href="#MJMAIN-31" x="2100" y="0"><use xlink:href="#MJMAIN-2B" x="2827" y="0"><use xlink:href="#MJMAIN-28" x="3832" y="0"><use xlink:href="#MJMATHI-78" x="4226" y="0"><use xlink:href="#MJMAIN-2212" x="5026" y="0"><use xlink:href="#MJMATHI-53" x="6031" y="0"><use xlink:href="#MJMAIN-29" x="6681" y="0"><use xlink:href="#MJMAIN-2B" x="7297" y="0"><use xlink:href="#MJMAIN-29" x="10964" y="0"><use xlink:href="#MJMAIN-69"><use xlink:href="#MJMAIN-66" x="283" y="0"><use xlink:href="#MJMATHI-78" x="844" y="0"><use xlink:href="#MJMAIN-2264" x="1698" y="0"><use xlink:href="#MJMATHI-53" x="2759" y="0"><use xlink:href="#MJMAIN-6F"><use xlink:href="#MJMAIN-74" x="505" y="0"><use xlink:href="#MJMAIN-68" x="899" y="0"><use xlink:href="#MJMAIN-65" x="1460" y="0"><use xlink:href="#MJMAIN-72" x="1909" y="0"><use xlink:href="#MJMAIN-77" x="2306" y="0"><use xlink:href="#MJMAIN-69" x="3033" y="0"><use xlink:href="#MJMAIN-73" x="3316" y="0"><use xlink:href="#MJMAIN-65" x="3715" y="0"> \\left\\{ \\begin{array}{ll} e^{x} & \\mbox{if} \\ x \\leq S \\\\ e^{x} \\cdot (1 + (x - S) + \\frac{{(x - S)}^{2}}{2}) & \\mbox{otherwise} \\end{array} \\right.\\ \\ where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="9.956ex" height="2.211ex" viewBox="0 -831.5 4286.6 952" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-53" x="0" y="0"><use xlink:href="#MJMAIN-3C"><use xlink:href="#MJMAIN-3D" x="783" y="0"><use xlink:href="#MJMAIN-31"><use xlink:href="#MJMAIN-35" x="505" y="0"><use xlink:href="#MJMAIN-30" x="1010" y="0">S<=150, default <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="8.137ex" height="2.211ex" viewBox="0 -831.5 3503.6 952" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-53" x="0" y="0"><use xlink:href="#MJMAIN-3D" x="927" y="0"><use xlink:href="#MJMAIN-31"><use xlink:href="#MJMAIN-35" x="505" y="0"><use xlink:href="#MJMAIN-30" x="1010" y="0">S=150.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'sqlog10',
    'displayText': 'sqlog10(x[,S])',
    'snippet': 'sqlog10(${1:x})',
    'rightLabelHTML': '<span>Smooth (quadratic) logarithm base 10: result = <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="44.938ex" height="8.266ex" viewBox="0 -2016.5 19348.2 3559" role="img" focusable="false" style="vertical-align: -3.372ex; margin-bottom: -0.211ex;"><use xlink:href="#MJSZ4-23A7" x="0" y="-909"><use xlink:href="#MJSZ4-23A8" x="0" y="-1952"><use xlink:href="#MJSZ4-23A9" x="0" y="-2495"><use xlink:href="#MJMAIN-6C"><use xlink:href="#MJMAIN-6F" x="283" y="0"><use xlink:href="#MJMAIN-67" x="788" y="0"><use xlink:href="#MJMAIN-28" x="2107" y="0"><use xlink:href="#MJMATHI-78" x="2501" y="0"><use xlink:href="#MJMAIN-29" x="3078" y="0"><use xlink:href="#MJMAIN-22C5" x="2450" y="0"><use xlink:href="#MJMAIN-28" x="2955" y="0"><use xlink:href="#MJMAIN-6C"><use xlink:href="#MJMAIN-6E" x="283" y="0"><use xlink:href="#MJMATHI-53" x="4360" y="0"><use xlink:href="#MJMAIN-2B" x="5232" y="0"><use xlink:href="#MJMAIN-2212" x="8241" y="0"><use xlink:href="#MJMAIN-29" x="11908" y="0"><use xlink:href="#MJMAIN-69"><use xlink:href="#MJMAIN-66" x="283" y="0"><use xlink:href="#MJMATHI-78" x="844" y="0"><use xlink:href="#MJMAIN-2265" x="1698" y="0"><use xlink:href="#MJMATHI-53" x="2759" y="0"><use xlink:href="#MJMAIN-6F"><use xlink:href="#MJMAIN-74" x="505" y="0"><use xlink:href="#MJMAIN-68" x="899" y="0"><use xlink:href="#MJMAIN-65" x="1460" y="0"><use xlink:href="#MJMAIN-72" x="1909" y="0"><use xlink:href="#MJMAIN-77" x="2306" y="0"><use xlink:href="#MJMAIN-69" x="3033" y="0"><use xlink:href="#MJMAIN-73" x="3316" y="0"><use xlink:href="#MJMAIN-65" x="3715" y="0"> \\left\\{ \\begin{array}{ll} \\log_{10}(x) & \\mbox{if} \\ x \\geq S \\\\ \\frac{1}{\\ln(10)} \\cdot (\\ln S + \\frac{x - S}{S} - \\frac{(x - S)^2}{2S^2}) & \\mbox{otherwise} \\end{array} \\right.\\ \\ where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="11.774ex" height="2.349ex" viewBox="0 -831.5 5069.6 1011.3" role="img" focusable="false" style="vertical-align: -0.417ex;"><use xlink:href="#MJMATHI-53" x="0" y="0"><use xlink:href="#MJMAIN-3E"><use xlink:href="#MJMAIN-3D" x="783" y="0"><use xlink:href="#MJMAIN-2212" x="2771" y="0"><use xlink:href="#MJMAIN-31"><use xlink:href="#MJMAIN-35" x="505" y="0"><use xlink:href="#MJMAIN-30" x="1010" y="0">S>=-150, default <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="9.956ex" height="2.349ex" viewBox="0 -831.5 4286.6 1011.3" role="img" focusable="false" style="vertical-align: -0.417ex;"><use xlink:href="#MJMATHI-53" x="0" y="0"><use xlink:href="#MJMAIN-3D" x="927" y="0"><use xlink:href="#MJMAIN-2212" x="1988" y="0"><use xlink:href="#MJMAIN-31"><use xlink:href="#MJMAIN-35" x="505" y="0"><use xlink:href="#MJMAIN-30" x="1010" y="0">S=-150.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'sqr',
    'displayText': 'sqr(x)',
    'snippet': 'sqr(${1:x})',
    'rightLabelHTML': '<span>Square of argument <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x.</span>',
    'modelType': 'NLP',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'sqrec',
    'displayText': 'sqrec(x[,S])',
    'snippet': 'sqrec(${1:x})',
    'rightLabelHTML': '<span>Smooth (quadratic) reciprocal: result = <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="34.29ex" height="8.679ex" viewBox="0 -2135 14763.5 3736.8" role="img" focusable="false" style="vertical-align: -3.72ex;"><use xlink:href="#MJSZ4-23A7" x="0" y="-909"><use xlink:href="#MJSZ4-23A8" x="0" y="-2024"><use xlink:href="#MJSZ4-23A9" x="0" y="-2639"><use xlink:href="#MJMAIN-2212" x="1041" y="0"><use xlink:href="#MJMAIN-2B" x="4050" y="0"><use xlink:href="#MJMAIN-69"><use xlink:href="#MJMAIN-66" x="283" y="0"><use xlink:href="#MJMATHI-78" x="844" y="0"><use xlink:href="#MJMAIN-2265" x="1698" y="0"><use xlink:href="#MJMATHI-53" x="2759" y="0"><use xlink:href="#MJMAIN-6F"><use xlink:href="#MJMAIN-74" x="505" y="0"><use xlink:href="#MJMAIN-68" x="899" y="0"><use xlink:href="#MJMAIN-65" x="1460" y="0"><use xlink:href="#MJMAIN-72" x="1909" y="0"><use xlink:href="#MJMAIN-77" x="2306" y="0"><use xlink:href="#MJMAIN-69" x="3033" y="0"><use xlink:href="#MJMAIN-73" x="3316" y="0"><use xlink:href="#MJMAIN-65" x="3715" y="0"> \\left\\{ \\begin{array}{ll} \\frac{1}{x} & \\mbox{if} \\ x \\geq S \\\\ \\frac{1}{S} - \\frac{x - S}{S^2} + \\frac{(x - S)^2}{S^3} & \\mbox{otherwise} \\end{array} \\right.\\ \\ where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="11.96ex" height="2.486ex" viewBox="0 -950 5149.4 1070.5" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-53" x="0" y="0"><use xlink:href="#MJMAIN-3E"><use xlink:href="#MJMAIN-3D" x="783" y="0"><use xlink:href="#MJMAIN-31"><use xlink:href="#MJMAIN-30" x="505" y="0">S>=10^{-10}, default <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="10.141ex" height="2.486ex" viewBox="0 -950 4366.4 1070.5" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-53" x="0" y="0"><use xlink:href="#MJMAIN-3D" x="927" y="0"><use xlink:href="#MJMAIN-31"><use xlink:href="#MJMAIN-30" x="505" y="0">S=10^{-10}.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'sqrt',
    'displayText': 'sqrt(x)',
    'snippet': 'sqrt(${1:x})',
    'rightLabelHTML': '<span>Square root of <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x, see MathWorld</span>',
    'modelType': 'NLP',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'tan',
    'displayText': 'tan(x)',
    'snippet': 'tan(${1:x})',
    'rightLabelHTML': '<span>Tangent of the argument <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x, where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x must be in radians, see MathWorld</span>',
    'modelType': 'NLP',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'tanh',
    'displayText': 'tanh(x)',
    'snippet': 'tanh(${1:x})',
    'rightLabelHTML': '<span>Hyperbolic tangent of <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x, where <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x must be in radians, see MathWorld</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'trunc',
    'displayText': 'trunc(x)',
    'snippet': 'trunc(${1:x})',
    'rightLabelHTML': '<span>Truncation: returns the integer part of <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.34ex" height="1.523ex" viewBox="0 -535.3 577 655.8" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x, truncating towards zero.</span>',
    'modelType': 'DNLP',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'uniform',
    'displayText': 'uniform(LOW,HIGH)',
    'snippet': 'uniform(${1:LOW},${2:HIGH})',
    'rightLabelHTML': '<span>Generates a random number from the uniform distribution between LOW and HIGH, see MathWorld</span>',
    'modelType': 'none',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'uniformInt',
    'displayText': 'uniformInt(LOW,HIGH)',
    'snippet': 'uniformInt(${1:LOW},${2:HIGH})',
    'rightLabelHTML': '<span>Generates an integer random number from the discrete uniform distribution whose outcomes are the integers between LOW and HIGH, inclusive, see MathWorld</span>',
    'modelType': 'none',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'vcPower',
    'displayText': 'vcPower(x,Y)',
    'snippet': 'vcPower(${1:x},${2:Y})',
    'rightLabelHTML': '<span>Returns <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="2.834ex" height="2.486ex" viewBox="0 -950 1220.1 1070.5" role="img" focusable="false" style="vertical-align: -0.28ex;"><use xlink:href="#MJMATHI-78" x="0" y="0">x^{Y} for <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="5.622ex" height="2.349ex" viewBox="0 -772.3 2420.6 1011.3" role="img" focusable="false" style="vertical-align: -0.555ex;"><use xlink:href="#MJMATHI-78" x="0" y="0"><use xlink:href="#MJMAIN-2265" x="854" y="0"><use xlink:href="#MJMAIN-30" x="1915" y="0">x\\geq0.</span>',
    'modelType': 'NLP',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'smax',
    'displayText': 'smax((x),y)',
    'snippet': 'smax((${1:x}),${2:y})',
    'rightLabelHTML': '<span>Returns the maximum value of y over all x</span>',
    'modelType': 'all',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'smin',
    'displayText': 'smin((x),y)',
    'snippet': 'smin((${1:x}),${2:y})',
    'rightLabelHTML': '<span>Returns the minimum value of y over all x</span>',
    'modelType': 'all',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'prod',
    'displayText': 'prod((x),y)',
    'snippet': 'prod((${1:x}),${2:y})',
    'rightLabelHTML': '<span>Returns the product of y over all x</span>',
    'modelType': 'all',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'sum',
    'displayText': 'sum((x),y)',
    'snippet': 'sum((${1:x}),${2:y})',
    'rightLabelHTML': '<span>Returns the sum of y over all x</span>',
    'modelType': 'all',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'card',
    'displayText': 'card(STRING)',
    'snippet': 'card(${1:STRING})',
    'rightLabelHTML': '<span>Returns the number of characters in the string.</span>',
    'modelType': 'all',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  },
  {
    'name': 'ord',
    'displayText': 'ord(STRING[,PLACE])',
    'snippet': 'ord(${1:STRING})',
    'rightLabelHTML': '<span>Returns the ASCII code number of a character in a position in a string. The optional place entry defaults to 1 if omitted and identifies the character position within the string to be examined (1 for the first, 2 for the second, etc.)</span>',
    'modelType': 'all',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function'
  }
]
