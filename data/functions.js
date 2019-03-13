'use babel'

export default [
  {
    'name': 'abs',
    'displayText': 'abs(x)',
    'snippet': 'abs(${1:x})',
    'description': 'Absolute value of the argument x.',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'arccos',
    'displayText': 'arccos(x)',
    'snippet': 'arccos(${1:x})',
    'description': 'Inverse cosine of the argument x, where x is a real number between -1 and 1 and the output is in radians',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/InverseCosine.html'
  },
  {
    'name': 'arcsin',
    'displayText': 'arcsin(x)',
    'snippet': 'arcsin(${1:x})',
    'description': 'Inverse sine of the argument x, where x is a real number between -1 and 1 and the output is in radians',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/InverseSine.html'
  },
  {
    'name': 'arctan',
    'displayText': 'arctan(x)',
    'snippet': 'arctan(${1:x})',
    'description': 'Inverse tangent of the argument x, where x is a real number and the output is in radians',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/InverseTangent.html'
  },
  {
    'name': 'arctan2',
    'displayText': 'arctan2(y,x)',
    'snippet': 'arctan2(${1:y},${2:x})',
    'description': 'Four-quadrant arctan function yielding  \\arctan(frac{y}{x}) which is the angle the vector (x,y) makes with (1,0) in radians.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'beta',
    'displayText': 'beta(x,y)',
    'snippet': 'beta(${1:x},${2:y})',
    'description': 'Beta function:  B(x,y) = frac{\\gamma(x)\\gamma(y)}{\\gamma(x+y)}',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/BetaFunction.html'
  },
  {
    'name': 'betaReg',
    'displayText': 'betaReg(x,y,z)',
    'snippet': 'betaReg(${1:x},${2:y},${3:z})',
    'description': 'Regularized beta function',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/RegularizedBetaFunction.html'
  },
  {
    'name': 'binomial',
    'displayText': 'binomial(n,k)',
    'snippet': 'binomial(${1:n},${2:k})',
    'description': '(Generalized) Binomial coefficient for  n > -1,  -1 < k < n+1 .',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'ceil',
    'displayText': 'ceil(x)',
    'snippet': 'ceil(${1:x})',
    'description': 'Ceiling: returns the smallest integer greater than or equal to x.',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'centropy',
    'displayText': 'centropy(x,y[,Z])',
    'snippet': 'centropy(${1:x},${2:y})',
    'description': 'Cross-entropy: x * ln(frac{x+Z}{y+Z}), where Z >= 0. Default Z: 1e-20.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'cos',
    'displayText': 'cos(x)',
    'snippet': 'cos(${1:x})',
    'description': 'Cosine of the argument x, where x must be in radians',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/Cosine.html'
  },
  {
    'name': 'cosh',
    'displayText': 'cosh(x)',
    'snippet': 'cosh(${1:x})',
    'description': 'Hyperbolic Cosine of x, where x must be in radians',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/HyperbolicCosine.html'
  },
  {
    'name': 'cvPower',
    'displayText': 'cvPower(X,y)',
    'snippet': 'cvPower(${1:X},${2:y})',
    'description': 'Real power: returns  \\mathbf{X^{y}} for X\\geq0.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'div',
    'displayText': 'div(dividend,divisor)',
    'snippet': 'div(${1:dividend},${2:divisor})',
    'description': 'Returns  \\mathbf{frac{dividend}{divisor}}, undefined for divisor=0.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'div0',
    'displayText': 'div0(dividend,divisor)',
    'snippet': 'div0(${1:dividend},${2:divisor})',
    'description': 'Returns  \\mathbf{frac{dividend}{divisor}}, returns 10^{299} for divisor=0.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'eDist',
    'displayText': 'eDist(x1[,x2,x3,...])',
    'snippet': 'eDist(${1:x1})',
    'description': 'Euclidean or L-2 Norm: \\sqrt{ x_{1}^{2} + x_{2}^{2} + ... }.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'entropy',
    'displayText': 'entropy(x)',
    'snippet': 'entropy(${1:x})',
    'description': 'Entropy: -x*ln(x).',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'errorf',
    'displayText': 'errorf(x)',
    'snippet': 'errorf(${1:x})',
    'description': 'Integral of the standard normal distribution from negative infinity to x.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'execSeed',
    'displayText': 'execSeed',
    'snippet': 'execSeed',
    'description': 'Reads or resets the seed for the random number generator (RNG). Note that the state of the RNG cannot typically be captured in one seed value',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'exp',
    'displayText': 'exp(x)',
    'snippet': 'exp(${1:x})',
    'description': 'Exponential of x: e^{x}',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/ExponentialFunction.html'
  },
  {
    'name': 'fact',
    'displayText': 'fact(N)',
    'snippet': 'fact(${1:N})',
    'description': 'Factorial of N, where N \\geq 0 is an integer.',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'floor',
    'displayText': 'floor(x)',
    'snippet': 'floor(${1:x})',
    'description': 'Floor: greatest integer less than or equal to x.',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'frac',
    'displayText': 'frac(x)',
    'snippet': 'frac(${1:x})',
    'description': 'Returns the fractional part of x, s.t. x = trunc(x) + frac(x)',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'gamma',
    'displayText': 'gamma(x)',
    'snippet': 'gamma(${1:x})',
    'description': 'Gamma function',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/GammaFunction.html'
  },
  {
    'name': 'gammaReg',
    'displayText': 'gammaReg(x,a)',
    'snippet': 'gammaReg(${1:x},${2:a})',
    'description': 'Regularized Gamma function',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/RegularizedGammaFunction.html'
  },
  {
    'name': 'log',
    'displayText': 'log(x)',
    'snippet': 'log(${1:x})',
    'description': 'Natural logarithm: logarithm base e',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/NaturalLogarithm.html'
  },
  {
    'name': 'logBeta',
    'displayText': 'logBeta(x,y)',
    'snippet': 'logBeta(${1:x},${2:y})',
    'description': 'Log Beta function: \\log(B(x,y)).',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'logGamma',
    'displayText': 'logGamma(x)',
    'snippet': 'logGamma(${1:x})',
    'description': 'Log Gamma function as discussed in MathWorld',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/LogGammaFunction.html'
  },
  {
    'name': 'log10',
    'displayText': 'log10(x)',
    'snippet': 'log10(${1:x})',
    'description': 'Common logarithm: logarithm base 10',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/CommonLogarithm.html'
  },
  {
    'name': 'log2',
    'displayText': 'log2(x)',
    'snippet': 'log2(${1:x})',
    'description': 'Binary logarithm: logarithm base 2',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/BinaryLogarithm.html'
  },
  {
    'name': 'max',
    'displayText': 'max(x1,x2,x3,...)',
    'snippet': 'max(${1:x1},${2:x2},${3:x3},${4:...})',
    'description': 'Maximum value of the arguments, where the number of arguments may vary.',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'min',
    'displayText': 'min(x1,x2,x3,...)',
    'snippet': 'min(${1:x1},${2:x2},${3:x3},${4:...})',
    'description': 'Minimum value of the arguments, where the number of arguments may vary.',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'mod',
    'displayText': 'mod(x,y)',
    'snippet': 'mod(${1:x},${2:y})',
    'description': 'Remainder of x divided by y.',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'ncpCM',
    'displayText': 'ncpCM(x,y,Z)',
    'snippet': 'ncpCM(${1:x},${2:y},${3:Z})',
    'description': 'Chen-Mangasarian smoothing: x-Z* ln(1+e^{frac{x-y}{Z}}).',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'ncpF',
    'displayText': 'ncpF(x,y[,Z])',
    'snippet': 'ncpF(${1:x},${2:y})',
    'description': 'Fisher-Burmeister smoothing: \\sqrt{(x^{2}+y^{2}+2* Z)}-x-y, Z\\geq0. Default Z=0.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'ncpVUpow',
    'displayText': 'ncpVUpow(r,s[,MU])',
    'snippet': 'ncpVUpow(${1:r},${2:s})',
    'description': 'NCP Veelken-Ulbrich: smoothed min(r,s) \n  \n where t=r-s. Default MU=0.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'ncpVUsin',
    'displayText': 'ncpVUsin(r,s[,MU])',
    'snippet': 'ncpVUsin(${1:r},${2:s})',
    'description': 'NCP Veelken-Ulbrich: smoothed min(r,s) \n  \n where t=r-s. Default MU=0.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'normal',
    'displayText': 'normal(MEAN,STDDEV)',
    'snippet': 'normal(${1:MEAN},${2:STDDEV})',
    'description': 'Generate a random number from the normal distribution with mean MEAN and standard deviation STDDEV',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/NormalDistribution.html'
  },
  {
    'name': 'pi',
    'displayText': 'pi',
    'snippet': 'pi',
    'description': 'Value of  \\mathbf{\\pi=3.141593...}.',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'poly',
    'displayText': 'poly(x,A0,A1,A2[,A3,...])',
    'snippet': 'poly(${1:x},${2:A0},${3:A1},${4:A2})',
    'description': 'Returns p(x), where the polynomial p(x) = A_{0}+A_{1}x+A_{2}x^{2}+A_{3}x^{3}+...+A_{20}x^{20}. By default A_{3},...,A_{20}=0.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'power',
    'displayText': 'power(x,Y)',
    'snippet': 'power(${1:x},${2:Y})',
    'description': 'Returns  \\mathbf{x^Y}, where Y must be an integer.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'randBinomial',
    'displayText': 'randBinomial(N,P)',
    'snippet': 'randBinomial(${1:N},${2:P})',
    'description': 'Generate a random number from the binomial distribution, where N is the number of trials and P the probability of success for each trial',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/BinomialDistribution.html'
  },
  {
    'name': 'randLinear',
    'displayText': 'randLinear(LOW,SLOPE,HIGH)',
    'snippet': 'randLinear(${1:LOW},${2:SLOPE},${3:HIGH})',
    'description': 'Generate a random number between LOW and HIGH with linear distribution, SLOPE must be greater than frac{2}{{HIGH}-{LOW}}',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'randTriangle',
    'displayText': 'randTriangle(LOW,MID,HIGH)',
    'snippet': 'randTriangle(${1:LOW},${2:MID},${3:HIGH})',
    'description': 'Generate a random number between LOW and HIGH with triangular distribution, MID is the most probable number',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/TriangularDistribution.html'
  },
  {
    'name': 'round',
    'displayText': 'round(x[,DECPL])',
    'snippet': 'round(${1:x})',
    'description': 'Round x to DECPL decimal places. Default DECPL=0',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'rPower',
    'displayText': 'rPower(x,y)',
    'snippet': 'rPower(${1:x},${2:y})',
    'description': 'Returns x^{y} for x > 0 and also for x = 0 and restricted values of y. This function is equivalent to the operation \'x**y\', see Standard Arithmetic Operations.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'sigmoid',
    'displayText': 'sigmoid(x)',
    'snippet': 'sigmoid(${1:x})',
    'description': 'Sigmoid: frac{1}{1+e^{-x}}',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/SigmoidFunction.html'
  },
  {
    'name': 'sign',
    'displayText': 'sign(x)',
    'snippet': 'sign(${1:x})',
    'description': 'Sign of x: returns 1 if x > 0, -1 if x < 0, and 0 if x = 0.',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'signPower',
    'displayText': 'signPower(x,Y)',
    'snippet': 'signPower(${1:x},${2:Y})',
    'description': 'Signed power: for Y > 0, returns x^{Y} if x\\geq 0 and -1* |x|^{Y} if x<0.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'sin',
    'displayText': 'sin(x)',
    'snippet': 'sin(${1:x})',
    'description': 'Sine of the argument x, where x must be in radians',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/Sine.html'
  },
  {
    'name': 'sinh',
    'displayText': 'sinh(x)',
    'snippet': 'sinh(${1:x})',
    'description': 'Hyperbolic sine of x, where x must be in radians',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/HyperbolicSine.html'
  },
  {
    'name': 'slexp',
    'displayText': 'slexp(x[,S])',
    'snippet': 'slexp(${1:x})',
    'description': 'Smooth (linear) exponential: \\ \\ where S<=150, default S=150.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'sllog10',
    'displayText': 'sllog10(x[,S])',
    'snippet': 'sllog10(${1:x})',
    'description': 'Smooth (linear) logarithm base 10: \\ \\ where S>=-150, default S=-150.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'slrec',
    'displayText': 'slrec(x[,S])',
    'snippet': 'slrec(${1:x})',
    'description': 'Smooth (linear) reciprocal: \\ \\ where S>=10^{-10}, default S=10^{-10}.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'sqexp',
    'displayText': 'sqexp(x[,S])',
    'snippet': 'sqexp(${1:x})',
    'description': 'Smooth (quadratic) exponential: \\ \\ where S<=150, default S=150.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'sqlog10',
    'displayText': 'sqlog10(x[,S])',
    'snippet': 'sqlog10(${1:x})',
    'description': 'Smooth (quadratic) logarithm base 10: \\ \\ where S>=-150, default S=-150.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'sqr',
    'displayText': 'sqr(x)',
    'snippet': 'sqr(${1:x})',
    'description': 'Square of argument x.',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'sqrec',
    'displayText': 'sqrec(x[,S])',
    'snippet': 'sqrec(${1:x})',
    'description': 'Smooth (quadratic) reciprocal: \\ \\ where S>=10^{-10}, default S=10^{-10}.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'sqrt',
    'displayText': 'sqrt(x)',
    'snippet': 'sqrt(${1:x})',
    'description': 'Square root of x',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/SquareRoot.html'
  },
  {
    'name': 'tan',
    'displayText': 'tan(x)',
    'snippet': 'tan(${1:x})',
    'description': 'Tangent of the argument x, where x must be in radians',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/Tangent.html'
  },
  {
    'name': 'tanh',
    'displayText': 'tanh(x)',
    'snippet': 'tanh(${1:x})',
    'description': 'Hyperbolic tangent of x, where x must be in radians',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/HyperbolicTangent.html'
  },
  {
    'name': 'trunc',
    'displayText': 'trunc(x)',
    'snippet': 'trunc(${1:x})',
    'description': 'Truncation: returns the integer part of x, truncating towards zero.',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'uniform',
    'displayText': 'uniform(LOW,HIGH)',
    'snippet': 'uniform(${1:LOW},${2:HIGH})',
    'description': 'Generates a random number from the uniform distribution between LOW and HIGH',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/UniformDistribution.html'
  },
  {
    'name': 'uniformInt',
    'displayText': 'uniformInt(LOW,HIGH)',
    'snippet': 'uniformInt(${1:LOW},${2:HIGH})',
    'description': 'Generates an integer random number from the discrete uniform distribution whose outcomes are the integers between LOW and HIGH, inclusive',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': 'http://mathworld.wolfram.com/DiscreteUniformDistribution.html'
  },
  {
    'name': 'vcPower',
    'displayText': 'vcPower(x,Y)',
    'snippet': 'vcPower(${1:x},${2:Y})',
    'description': 'Returns x^{Y} for x\\geq0.',
    'compileTime': 'no',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'smax',
    'displayText': 'smax((x),y)',
    'snippet': 'smax((${1:x}),${2:y})',
    'description': 'Returns the maximum value of y over all x',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'smin',
    'displayText': 'smin((x),y)',
    'snippet': 'smin((${1:x}),${2:y})',
    'description': 'Returns the minimum value of y over all x',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'prod',
    'displayText': 'prod((x),y)',
    'snippet': 'prod((${1:x}),${2:y})',
    'description': 'Returns the product of y over all x',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'sum',
    'displayText': 'sum((x),y)',
    'snippet': 'sum((${1:x}),${2:y})',
    'description': 'Returns the sum of y over all x',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'card',
    'displayText': 'card(STRING)',
    'snippet': 'card(${1:STRING})',
    'description': 'Returns the number of characters in the string.',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'ord',
    'displayText': 'ord(STRING[,PLACE])',
    'snippet': 'ord(${1:STRING})',
    'description': 'Returns the ASCII code number of a character in a position in a string. The optional place entry defaults to 1 if omitted and identifies the character position within the string to be examined (1 for the first, 2 for the second, etc.)',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'sameas',
    'displayText': 'sameas(i,j)',
    'snippet': 'sameas(${1:i},${2:j})',
    'description': 'Returns TRUE if i is identical to j or i is identical to text, and FALSE otherwise.',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'diag',
    'displayText': 'diag(i,j)',
    'snippet': 'diag(${1:i},${2:j})',
    'description': 'Returns 1 if i is identical to j or i is identical to text, and 0 otherwise.',
    'compileTime': 'yes',
    'leftLabel': 'FUN',
    'type': 'function',
    'descriptionMoreURL': ''
  },
  {
    'name': 'display',
    'displayText': 'display',
    'snippet': 'display ${1:x};',
    'description': 'Write data to the listing file.',
    'compileTime': 'yes',
    'leftLabel': 'KEY',
    'type': 'keyword',
    'descriptionMoreURL': ''
  },
  {
    'name': 'abort',
    'displayText': 'abort',
    'snippet': 'abort ${1:x};',
    'description': 'Terminate execution and write data to the listing file.',
    'compileTime': 'yes',
    'leftLabel': 'KEY',
    'type': 'keyword',
    'descriptionMoreURL': ''
  },
  {
    'name': 'if',
    'displayText': 'if',
    'snippet': 'if (${1:logical_condition},\n ${2:statement}\n);',
    'description': 'If logical_condition is met, execute the statement.',
    'compileTime': 'yes',
    'leftLabel': 'KEY',
    'type': 'keyword',
    'descriptionMoreURL': ''
  },
  {
    'name': 'loop',
    'displayText': 'loop',
    'snippet': 'loop (${1:index_list},\n ${2:statement}\n);',
    'description': 'Loop over an index list (e.g set).',
    'compileTime': 'yes',
    'leftLabel': 'KEY',
    'type': 'keyword',
    'descriptionMoreURL': ''
  },
  {
    'name': 'while',
    'displayText': 'while',
    'snippet': 'while (${1:logical_condition},\n ${2:statement}\n);',
    'description': 'While the logical_condition is TRUE, execute the statement.',
    'compileTime': 'yes',
    'leftLabel': 'KEY',
    'type': 'keyword',
    'descriptionMoreURL': ''
  },
  {
    'name': 'for',
    'displayText': 'for',
    'snippet': 'for (${1:a} = ${2:start_value} ${3:to} ${4:end_value},\n ${5:statement}\n);',
    'description': 'Scalar a begins with the real number start_value and is changed after each pass of the loop until it reaches end_value.',
    'compileTime': 'yes',
    'leftLabel': 'KEY',
    'type': 'keyword',
    'descriptionMoreURL': ''
  },
  {
    'name': 'exit',
    'displayText': 'exit',
    'snippet': '$exit;',
    'description': 'Terminate execution.',
    'compileTime': 'yes',
    'leftLabel': 'KEY',
    'type': 'keyword',
    'descriptionMoreURL': ''
  },
  {
    'name': 'iftheni',
    'displayText': 'iftheni',
    'snippet': '$iftheni.${1:description} ${2:logical_condition}\n  ${3:statement}\n$endif.${1:description}',
    'description': 'IfThen-elseIf structure with case insensitive comparison.',
    'compileTime': 'yes',
    'leftLabel': 'KEY',
    'type': 'keyword',
    'descriptionMoreURL': ''
  }
]
