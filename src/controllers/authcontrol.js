export const signUp = async (req, res, next) => {
    const registerResults = signUpValidator.safeParse(req.body)
    if(!registerResults) {
        return res.status(400).json(formatZodError
            (registerResults.error.issues))
    }
    try {
        const {userName, phoneNumber, email} = req.body
        const user = await User.findOne({$or:[{userName}, {email}, {phoneNumber}]})
        if (user) {
            res.status(409).json({message: 'user already exist`s'})
        } else{
            const {
                name,
                userName,
                password,
                confirmPassword,
                email,
                phoneNumber,
                bio,
                gender
            } = req.body

             if(password !== confirmPassword) {
                return res.status(403).json({message: 'password and confirmPassword does not match'});
            }
            const encrytion = hashValue (password, confirmPassword);
             const newUser = new User({
                name,
                userName,
                password: encrytion,
                //confirmPassword: encrytion,
                email,
                phoneNumber,
                bio,
                gender
            })

        
            await newUser.save()
            res.status(200).json({message:'User registered succesfully', newUser})
            console.log('User registered succesfully', newUser);
        }
    }
 catch (error) {
    res.status(500).json({message: error.message})
    console.log(error.message);}
}

export const signIn = async ( req, res, next) => {
    const loginResults = signInValidator.safeParse(req.body)
    if(!loginResults) {
        return res.status(400).json(formatZodError
            (registerResults.error.issues))
    } try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if (!user) {
            return res.status(400).json({message: 'User with email not found'})
        }
        const comparePass =comparePasswords(password, {password})
        if(!comparePass) {
            return res.status(400).json({message:'password is incorrect'})
        }
          //const accessToken   generateTokenAndSetCookie(user.id)

        res.status(200).json({message: 'User login succesful', user})
    } catch (error) {
        res.status(500).json({message: error.message})
        console.log('INTERNAL SERVER ERROR',error.message)
    }
}

export const getSingleUsers = async() =>{}

export const logout = async ( req, res ,next) => {

}