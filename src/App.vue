<template>
    <div id="app">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
              integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
              integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
        <header><h1>Bond Movies</h1></header>
        <main>
            <router-view/>
        </main>
    </div>
</template>


<style lang="scss">
    main, header {
        width: 80%;
        margin: 0 auto;
    }

    body {
        font-family: "Proxima Nova",Arial,sans-serif;
    }
</style>
