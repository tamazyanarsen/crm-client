export function errorHandle(e, snackBar, router = null) {
    let result = '';
    if (e.error) {
        for (const key in e.error) {
            if (e.error.hasOwnProperty(key)) {
                result += e.error[key].toString();
            }
        }
    } else {
        try {
            for (const key of e) {
                result += e[key].toString();
            }
        } catch (e) {
            console.warn(e);
        }
    }
    snackBar.open(result, 'OK', { duration: 2000 });
    if ((e.status === 404 || e.status === 401) && router) {
        router.navigate(['/']).then(res => {
            console.warn(`navigate to ${['auth']}`, res);
        });
    }
}
