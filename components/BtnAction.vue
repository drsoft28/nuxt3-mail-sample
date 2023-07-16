<template>
    <button class="btn-action">
        <div class="btn-action_icon"><slot name="icon"></slot></div>
        <div class="btn-action_label">
            <slot />
        </div>
    </button>
</template>

<style scoped>
.btn-action{
    background: transparent;
    border:none;
    display: flex;
    gap:12px;
    align-items: center;
    cursor: pointer;
}
.btn-action_icon{
    width: 19px;
    height: 19px;
    overflow: hidden;
}
.btn-action_label{
color: #4B5563;

font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
</style>