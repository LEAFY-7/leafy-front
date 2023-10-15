import PageContainer from 'components/templates/page-container';

/**
 * 회원탈퇴
 */
const LeaveView = () => {
    const authViewModel: AuthViewModel = useViewModel(ViewModelName.AUTH);

    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get('code');
        if (!code) return;
        //
    }, [window.location.href]);

    return (
        <PageContainer style={{ overflow: 'visible', height: '100vh', minHeight: 0 }}>
            <AuthTemplate>
                <Typography
                    as="span"
                    textAlign="center"
                    variant="H3"
                    color="grey"
                    marginTop={16}
                    marginBottom={16}
                >
                    식집사님 회원탈퇴를 하시겠습니까?
                </Typography>
                <SignInForm
                    email={authViewModel.authState.email}
                    password={authViewModel.authState.password}
                    handleSignIn={authViewModel.handleSignIn}
                />
            </AuthTemplate>
            <Styled.SignInPlantImage src={Image} />
            <Styled.SignInPlantImage src={Image} />
        </PageContainer>
    );
};

export default LeaveView;
